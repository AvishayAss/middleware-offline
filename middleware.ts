import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';


export const middlewareFunc: APIGatewayProxyHandler = async (event, _context) => {
    try {
        console.log('middlewareFunc');
        return 'Message from middleware';
        
    } catch (e) {
        return e;
    }
    
};
