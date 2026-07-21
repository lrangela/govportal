import '@angular/compiler';
import { describe, it, expect } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  it('should instantiate and have title', () => {
    const app = new App();
    expect(app).toBeTruthy();
    expect(app.title).toBe('legacy-remote');
  });
});
