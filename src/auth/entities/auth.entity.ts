import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type Avater = {
    url: string;
    public_id: string;
}

@Schema()
export class Auth {
    @Prop({ required: true, unique: true, type: String })
    email: string;

    @Prop({ required: true, unique: true, type: String })
    password: string;

    @Prop({ required: false, type : Object })
    avatar: Avater;

    @Prop({ required: true, maxlength: 15 , type: String })
    firstName: string;

    @Prop({ required: true, maxlength: 15, type: String })
    lastName: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
export type AuthDocument = HydratedDocument<Auth>