import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PermitsStore } from './permits.store';

describe('PermitsStore', () => {
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

    it('should update page and reset on limit change', () => {
        const store = TestBed.inject(PermitsStore);
        store.setPage(5);
        store.setLimit(5);

        expect(store.limit()).toBe(5);
        expect(store.page()).toBe(1);
    });

    it('should load permits and filter by search', async () => {
        const store = TestBed.inject(PermitsStore);
        store.loadAll();

        const req = httpMock.expectOne('api/permits');
        req.flush([
            { id: 'p-1', citizenId: 'c-1', type: 'business', status: 'approved', region: 'North' },
            { id: 'p-2', citizenId: 'c-2', type: 'transport', status: 'pending', region: 'South' },
        ]);

        await Promise.resolve();
        TestBed.flushEffects();

        store.setSearch('transport');
        expect(store.totalFiltered()).toBe(1);
        expect(store.filteredItems()[0].type).toBe('transport');
    });

    it('should set error state on failed load', async () => {
        const store = TestBed.inject(PermitsStore);
        store.loadAll();

        const req = httpMock.expectOne('api/permits');
        req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.isLoading()).toBe(false);
        expect(store.error()).toBe('Error loading permits');
    });
});
