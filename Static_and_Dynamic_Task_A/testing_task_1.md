### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# == instead of single
# should be check_for_ace
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# def, not dif
# no comma in params
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name # should be card1
  else
    card2 # should be return card2
  end
end
end # 3rd 'end' not required

def self.cards_total(cards)
  total # total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total # should be - return "You have a total of #{total}" and should be outside loop.
  end
end
