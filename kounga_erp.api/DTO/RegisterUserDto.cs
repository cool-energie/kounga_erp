namespace kounga_erp.api.DTO;

public record RegisterUserDto(string email, string password, string firstName,  string lastName, string dateOfBirth, string phoneNumber);