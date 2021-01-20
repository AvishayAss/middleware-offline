import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';


export const getFunc: APIGatewayProxyHandler = async (event, _context) => {
    try {
        console.log('user getFunc')
        return {
            statusCode: 200,
            body:JSON.stringify({
                message: _context.prev,
                data:[
                    {
                        name:'John',
                        gender:'male'
                    },
                    {
                        name:'Doe',
                        gender:'male'
                    }
                ]
            })
        };
        
    } catch (e) {
        return e;
    }
    
};
