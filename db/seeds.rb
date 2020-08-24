users = [
    {
        email: "test@test.com",
        password: "123456",
        password_confirmation: "123456"
    }
]

users.each do |attribute|
    User.create attribute
end

apartments = [
    {
    street: "123 Main Street",
    city: "Wilmington",
    state: "NC",
    manager: "Bob Smith",
    email: "bsmith@email.com",
    price:"$1300",
    bedrooms: 2,
    bathrooms: 2,
    pets: "Yes"
    }
]

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
end