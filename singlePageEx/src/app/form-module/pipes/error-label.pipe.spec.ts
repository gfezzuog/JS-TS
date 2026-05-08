import { ErrorLabelPipe } from './error-label.pipe';

describe('ErrorLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
