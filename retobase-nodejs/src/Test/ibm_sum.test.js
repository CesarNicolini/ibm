const db = require('../database');
const ibm_sum =require('../Models/ibm_sum').model

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create sum', async () => {
    expect.assertions(1);
    const sum = await ibm_sum.create({
        id: 1,
        addend1: 2,
        addend1: 1,
        sum: 3
    });
    expect(sum.id).toEqual(1);
});

test('get sum', async () => {
    expect.assertions(2);
    const sum = await ibm_sum.findByPk(1);
    expect(sum.addend1).toEqual(2);
    expect(sum.addend2).toEqual(1);
    expect(sum.sum).toEqual(3);
});

test('delete sum', async () => {
    expect.assertions(1);
    await ibm_sum.destroy({
        where: {
            id: 1
        }
    });
    const sum = await ibm_sum.findByPk(1);
    expect(sum).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});