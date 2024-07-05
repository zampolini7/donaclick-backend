import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  // imports: [MongooseModule.forRoot(process.env.MONGO_DB_TEST), ProductsModule],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://zampolini7:TCJuc50W7StH8qUR@clusterdonaclicktest.ieh3xhw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDonaClickTest',
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
