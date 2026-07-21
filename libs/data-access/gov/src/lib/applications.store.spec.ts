import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApplicationsStore } from './applications.store';

describe('ApplicationsStore', () => {
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

    it('should reset page to 1 on setSearch', () => {
        const store = TestBed.inject(ApplicationsStore);
        store.setPage(3);
        store.setSearch('region-a');

        expect(store.q()).toBe('region-a');
        expect(store.page()).toBe(1);
    });

    it('should filter and paginate loaded applications', async () => {
        const store = TestBed.inject(ApplicationsStore);
        store.setLimit(1);
        store.loadAll();

        const req = httpMock.expectOne('api/applications');
        req.flush([
            { id: 'a-1', citizenId: 'c-1', permitId: 'p-1', region: 'North', status: 'submitted', createdAt: '2024-01-01', updatedAt: '2024-01-02' },
            { id: 'a-2', citizenId: 'c-2', permitId: 'p-2', region: 'South', status: 'completed', createdAt: '2024-02-01', updatedAt: '2024-02-02' },
        ]);

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.items().length).toBe(2);
        expect(store.totalFiltered()).toBe(2);
        expect(store.filteredItems().length).toBe(1);
        expect(store.filteredItems()[0].id).toBe('a-1');
    });

    it('should handle API errors', async () => {
        const store = TestBed.inject(ApplicationsStore);
        store.loadAll();

        const req = httpMock.expectOne('api/applications');
        req.flush('Server error', { status: 502, statusText: 'Bad Gateway' });

        await Promise.resolve();
        TestBed.flushEffects();

        expect(store.isLoading()).toBe(false);
        expect(store.error()).toBe('Error loading applications');
    });
});
