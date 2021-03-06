import pytest;
from codigo import is_odd


def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor True'
    assert is_odd(2) is False

def test_is_odd_when_number_is_even_throws_except():
    with pytest.raises(TypeError, match="not all arguments converted during string formatting"):
        assert is_odd("1") is False