import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CitizensStore } from './citizens.store';

describe('CitizensStore', () => {
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });

        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should reset page to 1 when search changes', () => {
        const store = TestBed.inject(CitizensStore);
        store.setPage(3);
        store.setSearch('mario');

        expect(store.q()).toBe('mario');
        expect(store.page()).toBe(1);
    });

    it('should update page and limit, resetting page on limit change', () => {
        const store = TestBed.inject(CitizensStore);
        store.setPage(4);
        store.setLimit(20);

        expect(store.limit()).toBe(20);
        expect(store.page()).toBe(1);
    });

    it('should load citizens and expose filtered pagination', async () => {
        const store = TestBed.inject(CitizensStore);
        store.loadAll();

        const req = httpMock.expectOne('api/citizens');
        req.flush([
            { id: 'c-1', first_name: 'Ada', last_name: 'Lovelace', doc_number: 'AL-001', is_active: true },
            { id: 'c-2', first_name: 'Grace', last_name: 'Hopper', doc_number: 'GH-002', is_active: false },
        ]);

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.isLoading()).toBe(false);
        expect(store.error()).toBeNull();
        expect(store.items().length).toBe(2);
        expect(store.isEmpty()).toBe(false);
        expect(store.filteredItems()[0].fullName).toBe('Ada Lovelace');
    });

    it('should expose empty state when no items are loaded', async () => {
        const store = TestBed.inject(CitizensStore);
        store.loadAll();

        const req = httpMock.expectOne('api/citizens');
        req.flush([]);

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.isLoading()).toBe(false);
        expect(store.items().length).toBe(0);
        expect(store.isEmpty()).toBe(true);
    });

    it('should set error when the API fails', async () => {
        const store = TestBed.inject(CitizensStore);
        store.loadAll();

        const req = httpMock.expectOne('api/citizens');
        req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.isLoading()).toBe(false);
        expect(store.error()).toBe('Error loading citizens');
        expect(store.isEmpty()).toBe(true);
    });
});
