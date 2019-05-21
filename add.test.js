const adddata=require('./add.js');

test('add two numbers',()=>{
    expect(adddata(1,2)).toBe(3);
});