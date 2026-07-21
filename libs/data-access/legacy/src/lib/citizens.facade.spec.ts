import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CitizensFacade } from './citizens.facade';

describe('CitizensFacade', () => {
    let httpMock: HttpTestingController;
    let facade: CitizensFacade;

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                CitizensFacade,
            ],
        });
        httpMock = TestBed.inject(HttpTestingController);
        facade = TestBed.inject(CitizensFacade);
        TestBed.flushEffects();
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should start loading and then expose citizens', async () => {
        expect(facade.isLoading()).toBe(true);

        httpMock.expectOne('api/citizens').flush([
            { id: 'c-1', first_name: 'Ada', last_name: 'Lovelace', doc_number: 'AL-001', is_active: true, created_at: '2020-01-01' },
        ]);

        await Promise.resolve();
        TestBed.flushEffects();

        expect(facade.isLoading()).toBe(false);
        expect(facade.error()).toBeNull();
        expect(facade.citizens().length).toBe(1);
        expect(facade.citizens()[0].fullName).toBe('Ada Lovelace');
        expect(facade.isEmpty()).toBe(false);
    });

    it('should be empty when the API returns no data', async () => {
        httpMock.expectOne('api/citizens').flush([]);

        await Promise.resolve();
        TestBed.flushEffects();

        expect(facade.isLoading()).toBe(false);
        expect(facade.isEmpty()).toBe(true);
        expect(facade.total()).toBe(0);
    });

    it('should set error when the API fails', async () => {
        httpMock.expectOne('api/citizens').flush('Server error', { status: 500, statusText: 'Internal Server Error' });

        await new Promise((resolve) => setTimeout(resolve, 300));
        httpMock.expectOne('api/citizens').flush('Server error', { status: 500, statusText: 'Internal Server Error' });

        await Promise.resolve();
        TestBed.flushEffects();

        expect(facade.isLoading()).toBe(false);
        expect(facade.error()).toBeTruthy();
        expect(facade.citizens().length).toBe(0);
    });

    it('should reset page to 1 when search changes', async () => {
        httpMock.expectOne('api/citizens').flush([]);
        await Promise.resolve();
        TestBed.flushEffects();

        facade.setPage(3);
        facade.setSearch('mario');

        expect(facade.q()).toBe('mario');
        expect(facade.page()).toBe(1);
    });

    it('should paginate results and respect limit changes', async () => {
        httpMock.expectOne('api/citizens').flush([
            { id: 'c-1', first_name: 'A', last_name: 'A', doc_number: '001', is_active: true },
            { id: 'c-2', first_name: 'B', last_name: 'B', doc_number: '002', is_active: true },
            { id: 'c-3', first_name: 'C', last_name: 'C', doc_number: '003', is_active: true },
        ]);
        await Promise.resolve();
        TestBed.flushEffects();

        facade.setLimit(2);
        TestBed.flushEffects();
        httpMock.expectOne('api/citizens').flush([
            { id: 'c-1', first_name: 'A', last_name: 'A', doc_number: '001', is_active: true },
            { id: 'c-2', first_name: 'B', last_name: 'B', doc_number: '002', is_active: true },
            { id: 'c-3', first_name: 'C', last_name: 'C', doc_number: '003', is_active: true },
        ]);
        await Promise.resolve();
        TestBed.flushEffects();

        expect(facade.limit()).toBe(2);
        expect(facade.page()).toBe(1);
        expect(facade.citizens().length).toBe(2);
    });
});
