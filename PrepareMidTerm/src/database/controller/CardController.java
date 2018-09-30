package database.controller;

import database.dataClass.Card;
import database.readController.ReadCardController;
import database.writeController.WriteCardController;

import javax.servlet.http.HttpServletRequest;

import static commonClasses.Integer.parseInt;

//Memo: This is example of extended class of controller. T = Card.
public class CardController extends Controller <Card> {
    @Override
    public Card createT(HttpServletRequest request) {
        return new Card(request);
    }

    @Override
    public boolean create(Card card) {
        //Create function is in WriteController class.
        WriteCardController wcController = new WriteCardController();
        return  wcController.insert(card);
    }

    @Override
    public Card read(int id) {
        ReadCardController rcController = new ReadCardController();
        return rcController.get(id);
    }

    @Override
    public boolean update(int id, Card card) {
        WriteCardController wcController = new WriteCardController();
        return wcController.edit(id, card);
    }

    @Override
    public boolean delete(int id) {
        WriteCardController wcController = new WriteCardController();
        return wcController.delete(id);
    }

    @Override
    public String getParameter(Card card) {
        String result = "";
        if(card != null){
            result = card.getParametersString();
        }
        return result;
    }
}
