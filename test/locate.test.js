import { locate, onError, onSuccess } from '../src/geo_location/locateme';
describe('locate test', () => {
    it('should register handlers with getCurrentPosition', (done) => {
        const originalFunc = navigator.geolocation.getCurrentPosition;

        navigator.geolocation.getCurrentPosition = (success, error) => {
            expect(success).toEqual(onSuccess);
            expect(error).toEqual(onError);
            done();
        }

        locate();

        navigator.geolocation.getCurrentPosition = originalFunc;
    });
});