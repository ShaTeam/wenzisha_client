class Gadget
    @CITY = "beijing"

    @create: (name, price) ->
        new Gadget(name, price)

    _price = 0

    constructor: (@name, price) ->
        _price = price

    sell: =>
        "Buy #{@name} with #{_price} in #{Gadget.CITY}"

iphone = new Gadget("iphone", 4999)
console.log iphone.name #=> "iphone"
console.log iphone.sell() #=> "Buy iphone with 4999 in beijing"

ipad = Gadget.create("ipad", 3999)
console.log ipad.sell() #=> "Buy ipad with 3999 in beijing"