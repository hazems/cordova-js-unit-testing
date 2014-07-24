describe("UserService", function() {
    var userService;

    beforeEach(function() {
        userService = UserService.getInstance();
    });
         
    it("should NOT be able to save a user with an empty name", function() {
        var user = {
            'name': ' ',
            'email': 'hazems@apache.org'
        };
            
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
    });
         
    it("should NOT be able to save a user with invalid email", function() {
        var user = {
            'name': 'Hazem Saleh',
            'email': 'Invalid_Email'
        };
            
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
    });
         
    it("should be able to save and load a valid user", function() {
        var originalUser = {
            'name': 'Hazem Saleh',
            'email': 'hazems@apache.org'
        };
            
        userService.saveUser(originalUser);
            
        var user = userService.getUser();
            
        expect(user).toEqual(originalUser);
    });
});
