describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var arr = [randomEvent, randomClick, randomInput, randomButton];

function randomEvent(){
	var eventNumber = getRandomInt(0, arr.length);
	if(eventNumber == 1){
		randomClick(5);
	}
	else if(eventNumber == 2){
		randomInput(5);
	}
	else if(eventNumber == 3){
		randomCombo(5);
	}else{
		randomButton(5);
	}
}

function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }
}
function randomInput(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('[type="text"]').then($text => {
            var randomLink = $text.get(getRandomInt(0, $text.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).clear().type('Probando llenado de texto');
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomInput, 1000, monkeysLeft);
        });
    }   
}

function randomCombo(monkeysLeft) {
	
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('select').then($combo => {
            var randomLink = $combo.get(getRandomInt(0, $combo.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).select('ram');
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomCombo, 1000, monkeysLeft);
        });
    }   
}

function randomButton(monkeysLeft) {
	
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('button').then($buttons => {
            var randomLink = $buttons.get(getRandomInt(0, $buttons.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomButton, 1000, monkeysLeft);
        });
    }   
}