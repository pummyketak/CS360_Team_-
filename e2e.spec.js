describe('TU News E2E Testing', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })

    it('should Send Text to Chatbot and Chatbot will send text back', async () => {
        await page.type('input.chat-input', 'ปฏิทินกิจกรรมต่างๆจะสามารถดูได้จากที่ไหนครับ');
        await page.click('Button.chat-submit');
        // await Promise.all([
            
        //     page.$eval('Button.chat-submit', element =>
        //         element.click()
        //     )
        // ])
        // await expect (page).toMatch('main', { text: 'สามารถดูปฏิทินกิจกรรมได้ที่ ลิงค์: https://www.reg.tu.ac.th/th/Picture/AttFile/c4c86cd7-9ad7-4bb6-b591-4fa2762e5e55' })
    })
    it('should Display Login Admin Page on click button', async () => {
        await Promise.all([
            // await page.click('a#btnlogin'),
            // await page.waitForNavigation()
            page.$eval('a#btnlogin', element =>
                element.click()
            ),
            await page.waitForNavigation(),
        ])
        expect(page.url()).toBe('http://localhost:3000/AdminLogin');
    })
    it('should Display AdminPage By login pass', async () => {
        await page.goto('http://localhost:3000/AdminLogin');
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
    it('should Display Login Admin Page By login fail', async () => {
        await page.goto('http://localhost:3000/AdminLogin');
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
})