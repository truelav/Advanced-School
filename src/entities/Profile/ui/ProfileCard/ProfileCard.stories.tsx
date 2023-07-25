import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import {ProfileCard} from './ProfileCard';


export default {
    title: 'entities/LoginForm',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;
const avatar = 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'mynameis',
        first: 'serghei',
        city: 'Kiev',
        currency: Currency.USD,
        avatar
    }
};

export const withError = Template.bind({});
withError.args = {
    error: 'true'
};


export const Loading = Template.bind({});
Loading.args = {};
