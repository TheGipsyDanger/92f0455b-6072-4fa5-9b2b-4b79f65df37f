const {
  viewExists,
  hooksExists,
  factoryExists,
  getNavigators,
  navigatorExists,
  componentExists,
  interfaceExists,
  reduxExists,
  navigatorExistsForViews,
} = require('./src/utils/componentExists');

module.exports = plop => {
  plop.setGenerator('Page', {
    description: 'Create a new Function Page',
    prompts:
      getNavigators().length > 0
        ? [
            {
              type: 'list',
              name: 'navigator',
              message: 'Belongs to which example?',
              default: getNavigators()[0],
              choices: () => getNavigators(),
            },
            {
              type: 'input',
              name: 'name',
              message: 'What should it be called?',
              default: 'Home Page',
              validate: (value, otherValues) => {
                if (/.+/.test(value)) {
                  if (otherValues.navigator != 'Default') {
                    return navigatorExistsForViews(
                      value,
                      'components',
                      otherValues.navigator
                    )
                      ? 'A component or container with this name already exists'
                      : true;
                  } else {
                    return viewExists(value)
                      ? 'A component or container with this name already exists'
                      : true;
                  }
                }
                return 'The name is required';
              },
            },
          ]
        : [
            {
              type: 'input',
              name: 'name',
              message: 'What should it be called?',
              default: 'Home Page',
              validate: value => {
                if (/.+/.test(value)) {
                  return viewExists(value)
                    ? 'A component or container with this name already exists'
                    : true;
                }
                return 'The name is required';
              },
            },
          ],
    actions: data => {
      let notNavigator = data.navigator == null || data.navigator == 'Default';

      const path = 'src/pages/';
      const pathToTemplate = './__templates__/pages';
      const patternImport = /\/\/ Import views here\n/g;

      const pathToIndex = notNavigator
        ? `${path}{{pascalCase name}}/index.tsx`
        : `${path}{{pascalCase navigator}}/{{pascalCase name}}/index.tsx`;

      const pathToStyle = notNavigator
        ? `${path}{{pascalCase name}}/{{pascalCase name}}.styles.ts`
        : `${path}{{pascalCase navigator}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts`;

      const pathToTypes = notNavigator
        ? `${path}{{pascalCase name}}/{{pascalCase name}}.types.ts`
        : `${path}{{pascalCase navigator}}/{{pascalCase name}}/{{pascalCase name}}.types.ts`;

      const pathToModel = notNavigator
        ? `${path}{{pascalCase name}}/{{pascalCase name}}.model.ts`
        : `${path}{{pascalCase navigator}}/{{pascalCase name}}/{{pascalCase name}}.model.ts`;

      const pathToTest = notNavigator
        ? `${path}{{pascalCase name}}/{{pascalCase name}}.test.tsx`
        : `${path}{{pascalCase navigator}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`;

      const actions =
        data.navigator == null || data.navigator == 'Default'
          ? [
              {
                type: 'add',
                path: pathToIndex,
                templateFile: `${pathToTemplate}/index.js.hbs`,
              },
              {
                type: 'add',
                path: pathToStyle,
                templateFile: `${pathToTemplate}/styles.js.hbs`,
              },
              {
                type: 'add',
                path: pathToTypes,
                templateFile: `${pathToTemplate}/data.js.hbs`,
              },
              {
                type: 'add',
                path: pathToModel,
                templateFile: `${pathToTemplate}/model.js.hbs`,
              },
              {
                type: 'add',
                path: pathToTest,
                templateFile: `${pathToTemplate}/test.js.hbs`,
              },
              {
                type: 'modify',
                path: `${path}/index.ts`,
                pattern: patternImport,
                templateFile: `${pathToTemplate}/import.js.hbs`,
              },
            ]
          : [
              {
                type: 'add',
                path: pathToIndex,
                templateFile: `${pathToTemplate}/indexFlow.js.hbs`,
              },
              {
                type: 'add',
                path: pathToStyle,
                templateFile: `${pathToTemplate}/styles.js.hbs`,
              },
              {
                type: 'add',
                path: pathToTypes,
                templateFile: `${pathToTemplate}/data.js.hbs`,
              },
              {
                type: 'add',
                path: pathToModel,
                templateFile: `${pathToTemplate}/modelFlow.js.hbs`,
              },
              {
                type: 'add',
                path: pathToTest,
                templateFile: `${pathToTemplate}/test.js.hbs`,
              },
              {
                type: 'modify',
                path: 'src/pages/{{pascalCase navigator}}/navigator.tsx',
                pattern: /\/\/ import views here\n/g,
                templateFile: './__templates__/flow/import_view_routes.js.hbs',
              },
              {
                type: 'modify',
                path: 'src/pages/{{pascalCase navigator}}/navigator.tsx',
                pattern: /\/\/ add viewsName here\n/g,
                templateFile: './__templates__/flow/import_view_name.js.hbs',
              },
            ];
      return actions;
    },
  });
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: data => {
      const path = 'src/components/';
      const pathToTemplate = './__templates__/components';
      const patternImport = /\/\/ Import component here\n/g;

      const pathToIndex = `${path}{{pascalCase name}}/index.tsx`;
      const pathToStyle = `${path}{{pascalCase name}}/{{pascalCase name}}.styles.ts`;
      const pathToTypes = `${path}{{pascalCase name}}/{{pascalCase name}}.types.ts`;
      const pathToModel = `${path}{{pascalCase name}}/{{pascalCase name}}.model.ts`;
      const pathToTest = `${path}{{pascalCase name}}/{{pascalCase name}}.test.tsx`;

      const actions = [
        {
          type: 'add',
          path: pathToIndex,
          templateFile: `${pathToTemplate}/index.js.hbs`,
        },
        {
          type: 'add',
          path: pathToStyle,
          templateFile: `${pathToTemplate}/styles.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTypes,
          templateFile: `${pathToTemplate}/data.js.hbs`,
        },
        {
          type: 'add',
          path: pathToModel,
          templateFile: `${pathToTemplate}/model.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTest,
          templateFile: `${pathToTemplate}/test.js.hbs`,
        },
        {
          type: 'modify',
          path: `${path}/index.ts`,
          pattern: patternImport,
          templateFile: `${pathToTemplate}/import.js.hbs`,
        },
      ];

      return actions;
    },
  });
  plop.setGenerator('Redux', {
    description: 'Create a new redux',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Person',
        validate: value => {
          if (/.+/.test(value)) {
            return reduxExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/redux/reducers/{{pascalCase name}}.ts',
          templateFile: './__templates__/redux/new_redux.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.ts',
          pattern: /\/\/ Import redux here\n/g,
          templateFile: './__templates__/redux/import_export_redux.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.ts',
          pattern: /\/\/ use redux here\n/g,
          templateFile: './__templates__/redux/use_redux.js.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Flow', {
    description: 'Create a new Flow navigation',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of navigation?',
        default: 'StackNavigation',
        choices: () => ['StackNavigation'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Settings',
        validate: value => {
          if (/.+/.test(value)) {
            return navigatorExists(value)
              ? 'A navigator with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: data => {
      const path = 'src/pages/';
      const pathToTemplate = './__templates__/pages';
      const patternImport = /\/\/ Import views here\n/g;

      const pathToIndex = `${path}{{pascalCase name}}Navigator/{{pascalCase name}}/index.tsx`;

      const pathToStyle = `${path}{{pascalCase name}}Navigator/{{pascalCase name}}/{{pascalCase name}}.styles.ts`;

      const pathToTypes = `${path}{{pascalCase name}}Navigator/{{pascalCase name}}/{{pascalCase name}}.types.ts`;

      const pathToModel = `${path}{{pascalCase name}}Navigator/{{pascalCase name}}/{{pascalCase name}}.model.ts`;

      const pathToTest = `${path}{{pascalCase name}}Navigator/{{pascalCase name}}/{{pascalCase name}}.test.tsx`;

      const actions = [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/index.tsx',
          templateFile: './__templates__/flow/index_flow.jbs.hbs',
        },
        {
          type: 'add',
          path: pathToIndex,
          templateFile: `${pathToTemplate}/indexNavigator.js.hbs`,
        },
        {
          type: 'add',
          path: pathToStyle,
          templateFile: `${pathToTemplate}/styles.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTypes,
          templateFile: `${pathToTemplate}/data.js.hbs`,
        },
        {
          type: 'add',
          path: pathToModel,
          templateFile: `${pathToTemplate}/modelNavigator.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTest,
          templateFile: `${pathToTemplate}/test.js.hbs`,
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/navigator.tsx',
          templateFile: './__templates__/flow/navigator.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/pages/index.ts',
          pattern: /\/\/ Import views here\n/g,
          templateFile: './__templates__/flow/import_view.js.hbs',
        },
      ];

      return actions;
    },
  });
  plop.setGenerator('Hook', {
    description: 'Create a new Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'useHookName',
        validate: value => {
          if (/.+/.test(value)) {
            return factoryExists(value)
              ? 'A factory with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/utils/hooks/use{{pascalCase name}}.tsx',
          templateFile: './__templates__/utils/factory.tsx.hbs',
        },
        {
          type: 'modify',
          path: 'src/utils/hooks/index.ts',
          pattern: /\/\/ export factory\n/g,
          templateFile: './__templates__/utils/export_factoy.ts.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Interfaces', {
    description: 'Create a new interface',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'PaymentInterface',
        validate: value => {
          if (/.+/.test(value)) {
            return interfaceExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/utils/interfaces/{{pascalCase name}}Interfaces.tsx',
          templateFile: './__templates__/utils/interfacesContext.tsx.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Request', {
    description: 'Create a new request',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'GetPaymentInfo',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/data/dataInterfaces/I{{pascalCase name}}.ts',
          templateFile: './__templates__/data/dataInterface.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/dataInterfaces/index.ts',
          pattern: /\/\/ Export dataInterfaces here\n/g,
          templateFile: './__templates__/data/export_dataInterfaces.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/data/useCases/{{pascalCase name}}.ts',
          templateFile: './__templates__/data/useCases.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/useCases/index.ts',
          pattern: /\/\/ Export useCases here\n/g,
          templateFile: './__templates__/data/export_useCases.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/data/models/I{{pascalCase name}}Request.ts',
          templateFile: './__templates__/data/model.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/models/index.ts',
          pattern: /\/\/ Export models here\n/g,
          templateFile: './__templates__/data/export_model.ts.hbs',
        },
      ];
      return actions;
    },
  });
};
