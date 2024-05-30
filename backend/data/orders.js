const orders = [
    {
        
        customerId: 1,
        orderDate: '2022-01-01',
        shippedDate: '2022-01-02',
        shipperId: 1,
        shipName: 'Shipper 1',
        shipAddress: 'Shipper Address 1',
        shipCity: 'Shipper City 1',
        shipRegion: 'Shipper Region 1',
        shipPostalCode: 'Shipper Postal Code 1',
        shipCountry: 'Shipper Country 1',
        total: 100.00,
        orderDetails: [
            {
                productId: 1,
                quantity: 2,
                unitPrice: 10.00
            }
        ]
        },
    
    {
        
        customerId: 2,
        orderDate: '2022-02-01',
        shippedDate: '2022-02-02',
        shipperId: 2,
        shipName: 'Shipper 2',
        shipAddress: 'Shipper Address 2',
        shipCity: 'Shipper City 2',
        shipRegion: 'Shipper Region 2',
        shipPostalCode: 'Shipper Postal Code 2',
        shipCountry: 'Shipper Country 2',
        total: 200.00,
        orderDetails: [
            {
                productId: 2,
                quantity: 2,
                unitPrice: 20.00
            }
        ]   
    
    },


    {
        
        customerId: 3,
        orderDate: '2022-03-01',
        shippedDate: '2022-03-02',
        shipperId: 3,
        shipName: 'Shipper 3',
        shipAddress: 'Shipper Address 3',
        shipCity: 'Shipper City 3',
        shipRegion: 'Shipper Region 3',
        shipPostalCode: 'Shipper Postal Code 3',
        shipCountry: 'Shipper Country 3',
        total: 300.00,
        orderDetails: [
            {
                productId: 3,
                quantity: 2,
                unitPrice: 30.00
            }
        ]   
    
    }

]


export default orders