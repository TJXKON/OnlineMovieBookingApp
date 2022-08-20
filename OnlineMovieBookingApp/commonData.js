exports.getValue = (array, key) => {
    return array.filter((o) => o.key === key)[0].value
    }
    exports.dateSlot = [
    {key: '01', value: '9/1'},
    {key: '02', value: '9/2'},
    {key: '03', value: '9/3'},
    {key: '04', value: '9/4'},
    {key: '05', value: '9/5'},
    ];
    exports.timeSlot= [
    {key: '01', value: '8.00am'},
    {key: '02', value: '11.00am'},
    {key: '03', value: '12.00pm'},
    {key: '04', value: '2.00pm'},
    {key: '05', value: '4.00pm'},
    ];
    exports.method=[
    {key: '01', value: 'Cash'},
    {key: '02', value: 'Credit/Debit Card'},
    {key: '03', value: 'Online Banking'},
    {key: '04', value: 'E-wallet'},
    ]