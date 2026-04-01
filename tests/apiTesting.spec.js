const{test,expect}=require('@playwright/test');

test('API Testing',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
})