import { StringByObjectArrayPipe } from './string-by-object-array.pipe';

describe('StringByObjectArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new StringByObjectArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
