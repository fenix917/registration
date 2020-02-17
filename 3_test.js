Feature('');

Scenario('Bad e-mail', (I) => {
    I.amOnPage('/');
	I.saveScreenshot("t3.main.png");
	I.wait(1);
	I.click('Registration');
	I.saveScreenshot("t4.reg1.png");
	I.wait(5);
	I.fillField('Username', 'fenix97');
	I.fillField('User Password', 's0meuslessp@ssword');
	I.fillField('User Email', 'fenix97');
	I.fillField('Confirm Password', 's0meuslessp@ssword');
	I.click("/html/body/div/div/div/div/div/main/article/div/div/form/div[1]/div/div[6]/div/ul/li[1]/input");
	I.saveScreenshot("t4.reg2.png");
	I.scrollPageToBottom();
	I.wait(2);
	I.click('Submit');
	I.saveScreenshot("t4.regOk.png");
	I.wait(5);
	I.saveScreenshot("t4.regpass.png");
});

