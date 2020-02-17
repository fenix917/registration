Feature('');

Scenario('No field fields', (I) => {
    I.amOnPage('/');
	I.saveScreenshot("t5.main.png");
	I.wait(1);
	I.click('Registration');
	I.saveScreenshot("t5.reg1.png");
	I.wait(5);
	I.scrollPageToBottom();
	I.wait(2);
	I.click('Submit');
	I.saveScreenshot("t5.regOk.png");
	I.wait(5);
	I.saveScreenshot("t5.regpass.png");
});

