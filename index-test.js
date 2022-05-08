var expect = chai.expect;

describe('MyFunctions', function () {
    describe('#addPoint', function() {
        it('should add a point to the winning players score', function () {
            var x = addPoint();
            expect(x).to.equal(1);
        });

        it('should not add a point if there was a  draw', function() {
            expect(function() {
                addPpint();
            }).to.throw(Error);
        });
    });
});