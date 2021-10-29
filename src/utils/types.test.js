const assume = require('assume');
const sinon = require('sinon');

const {
    isNumber
} = require('./types');

describe('types', function() {
    describe('isNumber', function() {
        const falseValues = [
            true,
            false,
            '',
            'string',
            '1',
            ()=>{},
            undefined,
            null,
            {},
            []
        ];
        const trueValues = [
            -1,
            -0.5,
            0,
            0.5,
            1
        ]

        it('returns false on non-Number values', function() {
            falseValues.forEach(value => assume(isNumber(value)).is.false);
        });

        it('returns true on Number values', function() {
            trueValues.forEach(value => assume(isNumber(value)).is.true);
        });
    });
});
