from django.core.validators import RegexValidator

re_phone_validator = RegexValidator(
    regex=r"^(\+\d{2}|0)9\d{9}$",
    message="phone must be in this format: `(+98|0)9123456789`",
)
