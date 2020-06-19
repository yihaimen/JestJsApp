import { linesCount, linesCountP } from '../src/files';

describe('test server side callback', () => {
    it('should return correct lines count for a valid file', (done) => {
        const onSuccess = (data) => {
            try {
                expect(data).toBe(25);
                done();
            } catch (error) {
                done(error);
            }
        };

        linesCount('src/files.js', onSuccess);
    });

    it('should report error for an invalid file name', (done) => {
        const onError = (err) => {
            expect(err).toBe('unable to open file src/async/files.js');
            done();
        };

        linesCount('src/async/files.js', undefined, onError);
    });
});

describe('test server side promise', () => {
    it('should return correct lines count for valid file', (done) => {
       const checkCount = (count) => {
           expect(count).toBe(25);
           done();
       }; 

       linesCountP('src/files.js')
                    .then(checkCount);
    });
});
