# converter.py

UNITS = {

    "Length": {
        "Meter": 1,
        "Kilometer": 1000,
        "Centimeter": 0.01,
        "Millimeter": 0.001,
        "Inch": 0.0254,
        "Foot": 0.3048,
        "Yard": 0.9144,
        "Mile": 1609.34
    },

    "Mass": {
        "Kilogram": 1,
        "Gram": 0.001,
        "Milligram": 0.000001,
        "Pound": 0.453592,
        "Ounce": 0.0283495
    },

    "Volume": {
        "Liter": 1,
        "Milliliter": 0.001,
        "Cubic Meter": 1000,
        "Gallon": 3.78541
    },

    "Speed": {
        "m/s": 1,
        "km/h": 0.277778,
        "mph": 0.44704
    },
    
    "Temperature": {
        "Celsius": 1,
        "Fahrenheit": 1,
        "Kelvin": 1
    },
    
    "Area": {
        "Square Meter": 1,
        "Square Kilometer": 1000000,
        "Square Foot": 0.092903,
        "Square Inch": 0.00064516,
        "Acre": 4046.86
    },

    "Time": {
        "Second": 1,
        "Minute": 60,
        "Hour": 3600,
        "Day": 86400
    },

    "Data Storage": {
        "Byte": 1,
        "Kilobyte": 1024,
        "Megabyte": 1024**2,
        "Gigabyte": 1024**3,
        "Terabyte": 1024**4
    },

}


def convert_unit(category, value, from_unit, to_unit):

    if category == "Temperature":

        return convert_temperature(
            value,
            from_unit,
            to_unit
        )

    units = UNITS[category]

    base_value = value * units[from_unit]

    result = base_value / units[to_unit]

    return result

def convert_temperature(value, from_unit, to_unit):

    if from_unit == to_unit:
        return value

    # Celsius conversions
    if from_unit == "Celsius":

        if to_unit == "Fahrenheit":
            return (value * 9/5) + 32

        if to_unit == "Kelvin":
            return value + 273.15

    # Fahrenheit conversions
    if from_unit == "Fahrenheit":

        if to_unit == "Celsius":
            return (value - 32) * 5/9

        if to_unit == "Kelvin":
            return ((value - 32) * 5/9) + 273.15

    # Kelvin conversions
    if from_unit == "Kelvin":

        if to_unit == "Celsius":
            return value - 273.15

        if to_unit == "Fahrenheit":
            return ((value - 273.15) * 9/5) + 32