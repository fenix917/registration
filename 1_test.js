Feature('');

Scenario('Registration test', (I) => {
    I.amOnPage('/');
	I.saveScreenshot("1.main.png");
	I.wait(1);
	I.click('Registration');
	I.saveScreenshot("2.reg.png");
	I.wait(5);
	I.fillField('Username', 'fenix97');
	I.fillField('User Password', 's0meuslessp@ssword');
	I.fillField('User Email', 'fenix97@yahoo.com');
	I.fillField('Confirm Password', 's0meuslessp@ssword');
	I.click("/html/body/div/div/div/div/div/main/article/div/div/form/div[1]/div/div[6]/div/ul/li[1]/input");
	I.selectOption('Country', 'Moldova');
	I.saveScreenshot("3.reg.png");
	I.scrollPageToBottom();
	I.wait(2);
	I.click('Submit');
	I.saveScreenshot("4.reg.png");
	I.wait(5);
	I.saveScreenshot("5.reg.png");
});

