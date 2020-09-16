import MyButton from './Button.vue';

export default {
  title: 'Decorators',
  component: MyButton,
  decorators: [() => '<div style="background-color: green;"><story /></div>'],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'Button',
};
Standard.storyName = 'Decorator on component level';

export const WithDecorator = Template.bind({});
WithDecorator.args = Standard.args;
WithDecorator.decorators = [() => '<div style="padding: 3em;"><story /></div>'];
WithDecorator.storyName = 'Decorator on component & story level';

export const DecoratorTemplate = Template.bind({});
DecoratorTemplate.args = Standard.args;
DecoratorTemplate.decorators = [
  () => ({ template: '<div style="padding: 3em;"><story /></div>' }),
];
DecoratorTemplate.storyName = 'Decorator using "template" prop';
