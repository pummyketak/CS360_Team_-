const { pageError } = require("wikipedia/dist")

describe('TU News main page', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })

    it('should display adminlogin button', async() => {
        await page.goto('http://localhost:3000')
        await page.$eval('a#btnlogin', element => element.click());
        expect(page.url()).toBe('http://localhost:3000/AdminLogin');
    })

    it('should display chatbot button', async() => {
        await page.goto('http://localhost:3000')
        await page.click('button.open-button')

        //expect()


    
    })

    

   // it('should Send Text to Chatbot and Chatbot will send text back', async () => {
     //   await page.click('button.open-button');
       // await page.type('input.chat-input', 'ปฏิทินกิจกรรมต่างๆจะสามารถดูได้จากที่ไหนครับ');
        //await page.click('Button.chat-submit');
        // await Promise.all([
        //     page.$eval('Button.chat-submit', element =>
        //     element.click()
        // )
        // ])
        // await expect (page).toMatch('main', { text: 'สามารถดูปฏิทินกิจกรรมได้ที่ ลิงค์: https://www.reg.tu.ac.th/th/Picture/AttFile/c4c86cd7-9ad7-4bb6-b591-4fa2762e5e55' })
        //await page.click('button.open-button');
    //})
    it('should Display Login Admin Page on click button', async () => {
        await Promise.all([
            page.$eval('a#btnlogin', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/AdminLogin');
    })
    
})

//Login page Test E2E
describe('Login Page',()=> {
    beforeAll(async ()=>{
        await page.goto('http://localhost:3000/AdminLogin');
    })
    it('should Display Login Admin Page By login fail', async () => {
        await page.type('input.user-box', "Admin1");
        await page.type('input.pass-box', "Admin");
        await Promise.all([
            // await page.click('Button.button'),
            // await page.waitForNavigation()
            page.$eval('Button.button', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/AdminLogin');
    })

    it('should Display AdminPage By login pass', async () => {
        await page.type('input.user-box', "Admin");
        await page.type('input.pass-box', "Admin");
        await Promise.all([
            // await page.click('Button.button'),
            // await page.waitForNavigation()
            page.$eval('Button.button', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/AdminPage');
    })
    
})

describe('Admin Page',()=> {
    beforeAll(async ()=>{ 
        await page.goto('http://localhost:3000/AdminPage');
    })

    it('should Display Mainpage while click logo', async () => {
        await Promise.all([
            page.$eval('a#logo', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/AdminPage');
    })

    it('should Display EventManage while click add', async () => {
        await page.goto('http://localhost:3000/AdminPage');
        await Promise.all([
            page.$eval('a#add', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/EventManage');
    })

    it('should Display seeAllNewsAdmin while click readmore', async () => {
        await page.goto('http://localhost:3000/AdminPage');
        await Promise.all([
            page.$eval('a#readmore', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/seeAllNewsAdmin');
    })

    it('should Display seeAllEventsAdmin while click readmoreEvent', async () => {
        await page.goto('http://localhost:3000/AdminPage');
        await Promise.all([
            page.$eval('a#readmoreevent', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/seeAllEventsAdmin');
    })

    it('should Display Mainpage while click logout', async () => {
        await page.goto('http://localhost:3000/AdminPage');
        await Promise.all([
            page.$eval('a#btnlogout', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/');
    })





})
