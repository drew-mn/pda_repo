require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2.rb')
require_relative('../card')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("diamonds", 7)
    @card2 = Card.new("spades", 3)
    @card3 = Card.new("hearts", 9)
    @card4 = Card.new("clubs", 4)
    @card5 = Card.new("hearts", 1)

    @cards = [@card1, @card2, @card3, @card4, @card5]

    @game = CardGame.new()
  end


  def test_checkforAce()
    assert_equal(true, @game.checkforAce(@card5))
  end

  def test_highest_card()
    assert_equal(@card3, @game.highest_card(@card2, @card3))
  end


  def test_cards_total()
    assert_equal("You have a total of 24", CardGame.cards_total(@cards))
  end

end
