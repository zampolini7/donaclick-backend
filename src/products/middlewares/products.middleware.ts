import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ProductValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const products = Array.isArray(req.body) ? req.body : [req.body];

    products.forEach((product) => {
      const { name, description, price, category, stock } = product;

      if (req.method === 'POST' || req.method === 'PUT') {
        if (!name) {
          throw new BadRequestException('Product name is required');
        }

        if (typeof name !== 'string') {
          throw new BadRequestException('Product name must be a string');
        }

        if (!description) {
          throw new BadRequestException('Product description is required');
        }

        if (typeof description !== 'string') {
          throw new BadRequestException('Product description must be a string');
        }

        if (price === undefined) {
          throw new BadRequestException('Product price is required');
        }

        if (typeof price !== 'number') {
          throw new BadRequestException('Product price must be a number');
        }

        if (!category) {
          throw new BadRequestException('Product category is required');
        }

        if (!Array.isArray(category)) {
          throw new BadRequestException('Product category must be an array');
        }

        if (stock === undefined) {
          throw new BadRequestException('Product stock is required');
        }

        if (typeof stock !== 'number') {
          throw new BadRequestException('Product stock must be a number');
        }
      } else if (req.method === 'PATCH') {
        if (name !== undefined && typeof name !== 'string') {
          throw new BadRequestException('Product name must be a string');
        }

        if (description !== undefined && typeof description !== 'string') {
          throw new BadRequestException('Product description must be a string');
        }
        if (price !== undefined && typeof price !== 'number') {
          throw new BadRequestException('Product price must be a number');
        }

        if (category !== undefined && typeof category !== 'string') {
          throw new BadRequestException('Product category must be a string');
        }

        if (stock !== undefined && typeof stock !== 'number') {
          throw new BadRequestException('Product stock must be a number');
        }
      }
    });

    next();
  }
}
