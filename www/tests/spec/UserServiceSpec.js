describe("UserService", function() {
    var userService;

    beforeEach(function() {
        userService = UserService.getInstance();
    });
         
    it("should NOT be able to save a user with an empty user name", function() {
        // GIVEN
        var user = {
            'name': ' ',
            'email': 'hazems@apache.org'
        };
            
        // WHEN / THEN
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
       });
         
    it("should NOT be able to save a user with invalid email", function() {
        // GIVEN
        var user = {
            'name': 'Hazem',
            'email': 'Invalid_Email'
        };
            
        // WHEN / THEN
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
    });
         
    it("should NOT be able to save a user with a user name more than 6 characters", function() {
        // GIVEN
        var user = {
            'name': 'LengthyUserName',
            'email': 'hazems@apache.org'
            };
            
        // WHEN / THEN
        expect(function() {
                   userService.saveUser(user);
              }).toThrow();
    });
         
    it("should be able to save and load a valid user", function() {
        // GIVEN
        var originalUser = {
            'name': 'Hazem',
            'email': 'hazems@apache.org'
        };
            
        // WHEN
        userService.saveUser(originalUser);
        var user = userService.getUser();
           
        // THEN
        expect(user).toEqual(originalUser);
    });
});
