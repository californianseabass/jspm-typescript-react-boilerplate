SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-typescript-react-boilerplate/": ""
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "jspm-typescript-react-boilerplate/build.js": [
        "jspm-typescript-react-boilerplate/app.tsx",
        "jspm-typescript-react-boilerplate/components/root.tsx",
        "jspm-typescript-react-boilerplate/components/login-form.tsx",
        "jspm-typescript-react-boilerplate/stores/user-store.ts",
        "npm:mobx@4.1.1/lib/mobx.js",
        "npm:mobx@4.1.1.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:material-ui@next/TextField/index.js",
        "npm:material-ui@next.json",
        "npm:material-ui@next/TextField/TextField.js",
        "npm:material-ui@next/Select/Select.js",
        "npm:material-ui@next/Input/index.js",
        "npm:material-ui@next/Input/InputLabel.js",
        "npm:material-ui@next/Form/index.js",
        "npm:material-ui@next/Form/FormControlLabel.js",
        "npm:material-ui@next/Typography/index.js",
        "npm:material-ui@next/Typography/Typography.js",
        "npm:material-ui@next/utils/helpers.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:babel-runtime@6.26.0/core-js/object/keys.js",
        "npm:babel-runtime@6.26.0.json",
        "npm:core-js@2.5.4/library/fn/object/keys.js",
        "npm:core-js@2.5.4.json",
        "npm:core-js@2.5.4/library/modules/_core.js",
        "npm:core-js@2.5.4/library/modules/es6.object.keys.js",
        "npm:core-js@2.5.4/library/modules/_object-sap.js",
        "npm:core-js@2.5.4/library/modules/_fails.js",
        "npm:core-js@2.5.4/library/modules/_export.js",
        "npm:core-js@2.5.4/library/modules/_has.js",
        "npm:core-js@2.5.4/library/modules/_hide.js",
        "npm:core-js@2.5.4/library/modules/_descriptors.js",
        "npm:core-js@2.5.4/library/modules/_property-desc.js",
        "npm:core-js@2.5.4/library/modules/_object-dp.js",
        "npm:core-js@2.5.4/library/modules/_to-primitive.js",
        "npm:core-js@2.5.4/library/modules/_is-object.js",
        "npm:core-js@2.5.4/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.5.4/library/modules/_dom-create.js",
        "npm:core-js@2.5.4/library/modules/_global.js",
        "npm:core-js@2.5.4/library/modules/_an-object.js",
        "npm:core-js@2.5.4/library/modules/_ctx.js",
        "npm:core-js@2.5.4/library/modules/_a-function.js",
        "npm:core-js@2.5.4/library/modules/_object-keys.js",
        "npm:core-js@2.5.4/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.5.4/library/modules/_object-keys-internal.js",
        "npm:core-js@2.5.4/library/modules/_shared-key.js",
        "npm:core-js@2.5.4/library/modules/_uid.js",
        "npm:core-js@2.5.4/library/modules/_shared.js",
        "npm:core-js@2.5.4/library/modules/_array-includes.js",
        "npm:core-js@2.5.4/library/modules/_to-absolute-index.js",
        "npm:core-js@2.5.4/library/modules/_to-integer.js",
        "npm:core-js@2.5.4/library/modules/_to-length.js",
        "npm:core-js@2.5.4/library/modules/_to-iobject.js",
        "npm:core-js@2.5.4/library/modules/_defined.js",
        "npm:core-js@2.5.4/library/modules/_iobject.js",
        "npm:core-js@2.5.4/library/modules/_cof.js",
        "npm:core-js@2.5.4/library/modules/_to-object.js",
        "npm:babel-runtime@6.26.0/helpers/typeof.js",
        "npm:babel-runtime@6.26.0/core-js/symbol.js",
        "npm:core-js@2.5.4/library/fn/symbol/index.js",
        "npm:core-js@2.5.4/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.5.4/library/modules/_wks-define.js",
        "npm:core-js@2.5.4/library/modules/_wks-ext.js",
        "npm:core-js@2.5.4/library/modules/_wks.js",
        "npm:core-js@2.5.4/library/modules/_library.js",
        "npm:core-js@2.5.4/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.5.4/library/modules/es6.object.to-string.js",
        "npm:core-js@2.5.4/library/modules/es6.symbol.js",
        "npm:core-js@2.5.4/library/modules/_object-gops.js",
        "npm:core-js@2.5.4/library/modules/_object-pie.js",
        "npm:core-js@2.5.4/library/modules/_object-gopn.js",
        "npm:core-js@2.5.4/library/modules/_object-gopd.js",
        "npm:core-js@2.5.4/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.5.4/library/modules/_object-create.js",
        "npm:core-js@2.5.4/library/modules/_html.js",
        "npm:core-js@2.5.4/library/modules/_object-dps.js",
        "npm:core-js@2.5.4/library/modules/_is-array.js",
        "npm:core-js@2.5.4/library/modules/_enum-keys.js",
        "npm:core-js@2.5.4/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.5.4/library/modules/_meta.js",
        "npm:core-js@2.5.4/library/modules/_redefine.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
        "npm:core-js@2.5.4/library/fn/symbol/iterator.js",
        "npm:core-js@2.5.4/library/modules/web.dom.iterable.js",
        "npm:core-js@2.5.4/library/modules/_iterators.js",
        "npm:core-js@2.5.4/library/modules/es6.array.iterator.js",
        "npm:core-js@2.5.4/library/modules/_iter-define.js",
        "npm:core-js@2.5.4/library/modules/_object-gpo.js",
        "npm:core-js@2.5.4/library/modules/_iter-create.js",
        "npm:core-js@2.5.4/library/modules/_iter-step.js",
        "npm:core-js@2.5.4/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.5.4/library/modules/es6.string.iterator.js",
        "npm:core-js@2.5.4/library/modules/_string-at.js",
        "npm:material-ui@next/styles/withStyles.js",
        "npm:material-ui@next/styles/getThemeProps.js",
        "npm:material-ui@next/styles/getStylesCreator.js",
        "npm:deepmerge@2.1.0/dist/umd.js",
        "npm:deepmerge@2.1.0.json",
        "npm:babel-runtime@6.26.0/helpers/extends.js",
        "npm:babel-runtime@6.26.0/core-js/object/assign.js",
        "npm:core-js@2.5.4/library/fn/object/assign.js",
        "npm:core-js@2.5.4/library/modules/es6.object.assign.js",
        "npm:core-js@2.5.4/library/modules/_object-assign.js",
        "npm:material-ui@next/styles/createGenerateClassName.js",
        "npm:material-ui@next/styles/themeListener.js",
        "npm:prop-types@15.6.1/index.js",
        "npm:prop-types@15.6.1.json",
        "npm:prop-types@15.6.1/factoryWithThrowingShims.js",
        "npm:prop-types@15.6.1/lib/ReactPropTypesSecret.js",
        "npm:fbjs@0.8.16/lib/invariant.js",
        "npm:fbjs@0.8.16.json",
        "npm:fbjs@0.8.16/lib/emptyFunction.js",
        "npm:prop-types@15.6.1/factoryWithTypeCheckers.js",
        "npm:prop-types@15.6.1/checkPropTypes.js",
        "npm:fbjs@0.8.16/lib/warning.js",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:babel-runtime@6.26.0/helpers/defineProperty.js",
        "npm:babel-runtime@6.26.0/core-js/object/define-property.js",
        "npm:core-js@2.5.4/library/fn/object/define-property.js",
        "npm:core-js@2.5.4/library/modules/es6.object.define-property.js",
        "npm:material-ui@next/styles/createMuiTheme.js",
        "npm:material-ui@next/styles/spacing.js",
        "npm:material-ui@next/styles/zIndex.js",
        "npm:material-ui@next/styles/transitions.js",
        "npm:babel-runtime@6.26.0/core-js/number/is-nan.js",
        "npm:core-js@2.5.4/library/fn/number/is-nan.js",
        "npm:core-js@2.5.4/library/modules/es6.number.is-nan.js",
        "npm:babel-runtime@6.26.0/helpers/objectWithoutProperties.js",
        "npm:material-ui@next/styles/shadows.js",
        "npm:material-ui@next/styles/createMixins.js",
        "npm:material-ui@next/styles/createPalette.js",
        "npm:material-ui@next/styles/colorManipulator.js",
        "npm:material-ui@next/colors/common.js",
        "npm:material-ui@next/colors/red.js",
        "npm:material-ui@next/colors/grey.js",
        "npm:material-ui@next/colors/pink.js",
        "npm:material-ui@next/colors/indigo.js",
        "npm:material-ui@next/styles/createBreakpoints.js",
        "npm:material-ui@next/styles/createTypography.js",
        "npm:material-ui@next/styles/jssPreset.js",
        "npm:jss-props-sort@6.0.0/lib/index.js",
        "npm:jss-props-sort@6.0.0.json",
        "npm:jss-vendor-prefixer@7.0.0/lib/index.js",
        "npm:jss-vendor-prefixer@7.0.0.json",
        "npm:css-vendor@0.3.8/lib/index.js",
        "npm:css-vendor@0.3.8.json",
        "npm:css-vendor@0.3.8/lib/supported-value.js",
        "npm:css-vendor@0.3.8/lib/prefix.js",
        "npm:is-in-browser@1.1.3/dist/index.js",
        "npm:is-in-browser@1.1.3.json",
        "npm:css-vendor@0.3.8/lib/supported-property.js",
        "npm:css-vendor@0.3.8/lib/camelize.js",
        "npm:jss-default-unit@8.0.2/lib/index.js",
        "npm:jss-default-unit@8.0.2.json",
        "npm:jss-default-unit@8.0.2/lib/defaultUnits.js",
        "npm:jss-camel-case@6.1.0/lib/index.js",
        "npm:jss-camel-case@6.1.0.json",
        "npm:hyphenate-style-name@1.0.2/index.js",
        "npm:hyphenate-style-name@1.0.2.json",
        "npm:jss-nested@6.0.1/lib/index.js",
        "npm:jss-nested@6.0.1.json",
        "npm:jss-global@3.0.0/lib/index.js",
        "npm:jss-global@3.0.0.json",
        "npm:jss@9.8.1/lib/index.js",
        "npm:jss@9.8.1.json",
        "npm:jss@9.8.1/lib/Jss.js",
        "npm:jss@9.8.1/lib/renderers/VirtualRenderer.js",
        "npm:jss@9.8.1/lib/renderers/DomRenderer.js",
        "npm:jss@9.8.1/lib/utils/toCssValue.js",
        "npm:jss@9.8.1/lib/rules/StyleRule.js",
        "npm:jss@9.8.1/lib/utils/toCss.js",
        "npm:jss@9.8.1/lib/sheets.js",
        "npm:jss@9.8.1/lib/SheetsRegistry.js",
        "npm:jss@9.8.1/lib/utils/createRule.js",
        "npm:jss@9.8.1/lib/utils/cloneStyle.js",
        "npm:jss@9.8.1/lib/utils/isObservable.js",
        "npm:symbol-observable@1.2.0/lib/index.js",
        "npm:symbol-observable@1.2.0.json",
        "npm:symbol-observable@1.2.0/lib/ponyfill.js",
        "npm:jss@9.8.1/lib/utils/createGenerateClassName.js",
        "npm:jss@9.8.1/lib/utils/moduleId.js",
        "npm:jss@9.8.1/lib/StyleSheet.js",
        "npm:jss@9.8.1/lib/RuleList.js",
        "npm:jss@9.8.1/lib/utils/escape.js",
        "npm:jss@9.8.1/lib/utils/linkRule.js",
        "npm:jss@9.8.1/lib/plugins/functions.js",
        "npm:jss@9.8.1/lib/plugins/observables.js",
        "npm:jss@9.8.1/lib/plugins/rules.js",
        "npm:jss@9.8.1/lib/rules/ViewportRule.js",
        "npm:jss@9.8.1/lib/rules/FontFaceRule.js",
        "npm:jss@9.8.1/lib/rules/ConditionalRule.js",
        "npm:jss@9.8.1/lib/rules/KeyframesRule.js",
        "npm:jss@9.8.1/lib/rules/SimpleRule.js",
        "npm:jss@9.8.1/lib/PluginsRegistry.js",
        "npm:jss@9.8.1/lib/SheetsManager.js",
        "npm:jss@9.8.1/lib/utils/getDynamicStyles.js",
        "npm:react-jss@8.4.0/lib/ns.js",
        "npm:react-jss@8.4.0.json",
        "npm:react-jss@8.4.0/lib/contextTypes.js",
        "npm:react-jss@8.4.0/lib/propTypes.js",
        "npm:recompose@0.26.0/wrapDisplayName.js",
        "npm:recompose@0.26.0.json",
        "npm:recompose@0.26.0/getDisplayName.js",
        "npm:hoist-non-react-statics@2.5.0/index.js",
        "npm:hoist-non-react-statics@2.5.0.json",
        "npm:react@16.3.1/index.js",
        "npm:react@16.3.1.json",
        "npm:react@16.3.1/cjs/react.development.js",
        "npm:fbjs@0.8.16/lib/emptyObject.js",
        "npm:react@16.3.1/cjs/react.production.min.js",
        "npm:babel-runtime@6.26.0/core-js/number/min-safe-integer.js",
        "npm:core-js@2.5.4/library/fn/number/min-safe-integer.js",
        "npm:core-js@2.5.4/library/modules/es6.number.min-safe-integer.js",
        "npm:babel-runtime@6.26.0/core-js/map.js",
        "npm:core-js@2.5.4/library/fn/map/index.js",
        "npm:core-js@2.5.4/library/modules/es7.map.from.js",
        "npm:core-js@2.5.4/library/modules/_set-collection-from.js",
        "npm:core-js@2.5.4/library/modules/_for-of.js",
        "npm:core-js@2.5.4/library/modules/core.get-iterator-method.js",
        "npm:core-js@2.5.4/library/modules/_classof.js",
        "npm:core-js@2.5.4/library/modules/_is-array-iter.js",
        "npm:core-js@2.5.4/library/modules/_iter-call.js",
        "npm:core-js@2.5.4/library/modules/es7.map.of.js",
        "npm:core-js@2.5.4/library/modules/_set-collection-of.js",
        "npm:core-js@2.5.4/library/modules/es7.map.to-json.js",
        "npm:core-js@2.5.4/library/modules/_collection-to-json.js",
        "npm:core-js@2.5.4/library/modules/_array-from-iterable.js",
        "npm:core-js@2.5.4/library/modules/es6.map.js",
        "npm:core-js@2.5.4/library/modules/_collection.js",
        "npm:core-js@2.5.4/library/modules/_array-methods.js",
        "npm:core-js@2.5.4/library/modules/_array-species-create.js",
        "npm:core-js@2.5.4/library/modules/_array-species-constructor.js",
        "npm:core-js@2.5.4/library/modules/_an-instance.js",
        "npm:core-js@2.5.4/library/modules/_redefine-all.js",
        "npm:core-js@2.5.4/library/modules/_validate-collection.js",
        "npm:core-js@2.5.4/library/modules/_collection-strong.js",
        "npm:core-js@2.5.4/library/modules/_set-species.js",
        "npm:babel-runtime@6.26.0/helpers/inherits.js",
        "npm:babel-runtime@6.26.0/core-js/object/create.js",
        "npm:core-js@2.5.4/library/fn/object/create.js",
        "npm:core-js@2.5.4/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.26.0/core-js/object/set-prototype-of.js",
        "npm:core-js@2.5.4/library/fn/object/set-prototype-of.js",
        "npm:core-js@2.5.4/library/modules/es6.object.set-prototype-of.js",
        "npm:core-js@2.5.4/library/modules/_set-proto.js",
        "npm:babel-runtime@6.26.0/helpers/possibleConstructorReturn.js",
        "npm:babel-runtime@6.26.0/helpers/createClass.js",
        "npm:babel-runtime@6.26.0/helpers/classCallCheck.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-prototype-of.js",
        "npm:core-js@2.5.4/library/fn/object/get-prototype-of.js",
        "npm:core-js@2.5.4/library/modules/es6.object.get-prototype-of.js",
        "npm:classnames@2.2.5/index.js",
        "npm:classnames@2.2.5.json",
        "npm:material-ui@next/Form/FormHelperText.js",
        "npm:material-ui@next/Form/FormControl.js",
        "npm:material-ui@next/utils/reactHelpers.js",
        "npm:material-ui@next/Input/Input.js",
        "npm:material-ui@next/Input/Textarea.js",
        "npm:react-event-listener@0.5.3/lib/index.js",
        "npm:react-event-listener@0.5.3.json",
        "npm:react-event-listener@0.5.3/lib/supports.js",
        "npm:fbjs@0.8.16/lib/shallowEqual.js",
        "npm:lodash@4.17.5/debounce.js",
        "npm:lodash@4.17.5.json",
        "npm:lodash@4.17.5/toNumber.js",
        "npm:lodash@4.17.5/isSymbol.js",
        "npm:lodash@4.17.5/isObjectLike.js",
        "npm:lodash@4.17.5/_baseGetTag.js",
        "npm:lodash@4.17.5/_objectToString.js",
        "npm:lodash@4.17.5/_getRawTag.js",
        "npm:lodash@4.17.5/_Symbol.js",
        "npm:lodash@4.17.5/_root.js",
        "npm:lodash@4.17.5/_freeGlobal.js",
        "npm:lodash@4.17.5/isObject.js",
        "npm:lodash@4.17.5/now.js",
        "npm:material-ui@next/Form/FormLabel.js",
        "npm:material-ui@next/Form/FormGroup.js",
        "npm:material-ui@next/Input/InputAdornment.js",
        "npm:material-ui@next/Select/SelectInput.js",
        "npm:material-ui@next/Menu/Menu.js",
        "npm:material-ui@next/Menu/MenuList.js",
        "npm:material-ui@next/List/index.js",
        "npm:material-ui@next/List/ListSubheader.js",
        "npm:material-ui@next/List/ListItemSecondaryAction.js",
        "npm:material-ui@next/List/ListItemIcon.js",
        "npm:material-ui@next/List/ListItemText.js",
        "npm:material-ui@next/List/ListItemAvatar.js",
        "npm:material-ui@next/List/ListItem.js",
        "npm:material-ui@next/ButtonBase/index.js",
        "npm:material-ui@next/ButtonBase/ButtonBase.js",
        "npm:material-ui@next/ButtonBase/createRippleHandler.js",
        "npm:material-ui@next/ButtonBase/TouchRipple.js",
        "npm:material-ui@next/ButtonBase/Ripple.js",
        "npm:react-transition-group@2.3.0/Transition.js",
        "npm:react-transition-group@2.3.0.json",
        "npm:react-transition-group@2.3.0/utils/PropTypes.js",
        "npm:react-dom@16.3.1/index.js",
        "npm:react-dom@16.3.1.json",
        "npm:react-dom@16.3.1/cjs/react-dom.development.js",
        "npm:fbjs@0.8.16/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.16/lib/camelize.js",
        "npm:fbjs@0.8.16/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.16/lib/hyphenate.js",
        "npm:fbjs@0.8.16/lib/containsNode.js",
        "npm:fbjs@0.8.16/lib/isTextNode.js",
        "npm:fbjs@0.8.16/lib/isNode.js",
        "npm:fbjs@0.8.16/lib/getActiveElement.js",
        "npm:fbjs@0.8.16/lib/ExecutionEnvironment.js",
        "npm:react-dom@16.3.1/cjs/react-dom.production.min.js",
        "npm:react-transition-group@2.3.0/TransitionGroup.js",
        "npm:react-transition-group@2.3.0/utils/ChildMapping.js",
        "npm:babel-runtime@6.26.0/helpers/toConsumableArray.js",
        "npm:babel-runtime@6.26.0/core-js/array/from.js",
        "npm:core-js@2.5.4/library/fn/array/from.js",
        "npm:core-js@2.5.4/library/modules/es6.array.from.js",
        "npm:core-js@2.5.4/library/modules/_iter-detect.js",
        "npm:core-js@2.5.4/library/modules/_create-property.js",
        "npm:material-ui@next/utils/keyboardFocus.js",
        "npm:dom-helpers@3.3.1/ownerDocument.js",
        "npm:dom-helpers@3.3.1.json",
        "npm:dom-helpers@3.3.1/query/contains.js",
        "npm:dom-helpers@3.3.1/util/inDOM.js",
        "npm:keycode@2.2.0/index.js",
        "npm:keycode@2.2.0.json",
        "npm:react-lifecycles-compat@1.1.4/react-lifecycles-compat.cjs.js",
        "npm:react-lifecycles-compat@1.1.4.json",
        "npm:dom-helpers@3.3.1/ownerWindow.js",
        "npm:material-ui@next/List/List.js",
        "npm:dom-helpers@3.3.1/activeElement.js",
        "npm:material-ui@next/Popover/index.js",
        "npm:material-ui@next/Popover/Popover.js",
        "npm:material-ui@next/Paper/index.js",
        "npm:material-ui@next/Paper/Paper.js",
        "npm:material-ui@next/transitions/Grow.js",
        "npm:material-ui@next/transitions/utils.js",
        "npm:material-ui@next/styles/withTheme.js",
        "npm:material-ui@next/Modal/index.js",
        "npm:material-ui@next/Modal/ModalManager.js",
        "npm:material-ui@next/Modal/manageAriaHidden.js",
        "npm:material-ui@next/Modal/isOverflowing.js",
        "npm:dom-helpers@3.3.1/query/isWindow.js",
        "npm:dom-helpers@3.3.1/util/scrollbarSize.js",
        "npm:dom-helpers@3.3.1/style/index.js",
        "npm:dom-helpers@3.3.1/transition/isTransform.js",
        "npm:dom-helpers@3.3.1/transition/properties.js",
        "npm:dom-helpers@3.3.1/style/removeStyle.js",
        "npm:dom-helpers@3.3.1/style/getComputedStyle.js",
        "npm:dom-helpers@3.3.1/util/camelizeStyle.js",
        "npm:dom-helpers@3.3.1/util/camelize.js",
        "npm:dom-helpers@3.3.1/util/hyphenateStyle.js",
        "npm:dom-helpers@3.3.1/util/hyphenate.js",
        "npm:material-ui@next/Modal/Backdrop.js",
        "npm:material-ui@next/transitions/Fade.js",
        "npm:material-ui@next/Modal/Modal.js",
        "npm:material-ui@next/Portal/index.js",
        "npm:material-ui@next/Portal/LegacyPortal.js",
        "npm:material-ui@next/utils/exactProp.js",
        "npm:material-ui@next/Portal/Portal.js",
        "npm:material-ui@next/internal/RootRef.js",
        "npm:material-ui@next/internal/svg-icons/ArrowDropDown.js",
        "npm:material-ui@next/SvgIcon/index.js",
        "npm:material-ui@next/SvgIcon/SvgIcon.js",
        "npm:recompose@0.26.0/pure.js",
        "npm:recompose@0.26.0/setDisplayName.js",
        "npm:recompose@0.26.0/setStatic.js",
        "npm:recompose@0.26.0/shallowEqual.js",
        "npm:recompose@0.26.0/shouldUpdate.js",
        "npm:material-ui@next/Button/index.js",
        "npm:material-ui@next/Button/Button.js",
        "npm:material-ui@next/Card/index.js",
        "npm:material-ui@next/Card/CardHeader.js",
        "npm:material-ui@next/Card/CardMedia.js",
        "npm:material-ui@next/Card/CardActions.js",
        "npm:material-ui@next/Card/CardContent.js",
        "npm:material-ui@next/Card/Card.js",
        "npm:react-router@4.2.0/index.js",
        "npm:react-router@4.2.0.json",
        "npm:react-router@4.2.0/withRouter.js",
        "npm:react-router@4.2.0/Route.js",
        "npm:react-router@4.2.0/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:invariant@2.2.4/browser.js",
        "npm:invariant@2.2.4.json",
        "npm:react-router@4.2.0/Switch.js",
        "npm:react-router@4.2.0/StaticRouter.js",
        "npm:react-router@4.2.0/Router.js",
        "npm:history@4.7.2/PathUtils.js",
        "npm:history@4.7.2.json",
        "npm:react-router@4.2.0/Redirect.js",
        "npm:history@4.7.2/index.js",
        "npm:history@4.7.2/createMemoryHistory.js",
        "npm:history@4.7.2/createTransitionManager.js",
        "npm:history@4.7.2/LocationUtils.js",
        "npm:value-equal@0.4.0/cjs/index.js",
        "npm:value-equal@0.4.0.json",
        "npm:resolve-pathname@2.2.0/cjs/index.js",
        "npm:resolve-pathname@2.2.0.json",
        "npm:history@4.7.2/createHashHistory.js",
        "npm:history@4.7.2/DOMUtils.js",
        "npm:history@4.7.2/createBrowserHistory.js",
        "npm:react-router@4.2.0/Prompt.js",
        "npm:react-router@4.2.0/MemoryRouter.js",
        "npm:mobx-react@5.0.0/index.js",
        "npm:mobx-react@5.0.0.json",
        "github:frankwallis/plugin-typescript@7.1.0.json",
        "npm:material-ui@next/styles/index.js",
        "npm:material-ui@next/styles/MuiThemeProvider.js",
        "npm:brcast@3.0.1/dist/brcast.cjs.js",
        "npm:brcast@3.0.1.json",
        "npm:material-ui@next/colors/index.js",
        "npm:material-ui@next/colors/blueGrey.js",
        "npm:material-ui@next/colors/brown.js",
        "npm:material-ui@next/colors/deepOrange.js",
        "npm:material-ui@next/colors/orange.js",
        "npm:material-ui@next/colors/amber.js",
        "npm:material-ui@next/colors/yellow.js",
        "npm:material-ui@next/colors/lime.js",
        "npm:material-ui@next/colors/lightGreen.js",
        "npm:material-ui@next/colors/green.js",
        "npm:material-ui@next/colors/teal.js",
        "npm:material-ui@next/colors/cyan.js",
        "npm:material-ui@next/colors/lightBlue.js",
        "npm:material-ui@next/colors/blue.js",
        "npm:material-ui@next/colors/deepPurple.js",
        "npm:material-ui@next/colors/purple.js",
        "npm:react-jss@8.4.0/lib/JssProvider.js",
        "npm:react-jss@8.4.0/lib/jss.js",
        "npm:jss-preset-default@4.3.0/lib/index.js",
        "npm:jss-preset-default@4.3.0.json",
        "npm:jss-expand@5.1.0/lib/index.js",
        "npm:jss-expand@5.1.0.json",
        "npm:jss-expand@5.1.0/lib/props.js",
        "npm:jss-compose@5.0.0/lib/index.js",
        "npm:jss-compose@5.0.0.json",
        "npm:jss-extend@6.2.0/lib/index.js",
        "npm:jss-extend@6.2.0.json",
        "npm:jss-template@1.0.1/lib/index.js",
        "npm:jss-template@1.0.1.json",
        "npm:jss-template@1.0.1/lib/parse.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@7.1.0",
      "typescript": "npm:typescript@2.5.2",
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
      "express": "npm:express@4.15.4"
    },
    "packages": {
      "npm:typescript@2.5.2": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.17"
        }
      },
      "npm:source-map-support@0.4.17": {
        "map": {
          "source-map": "npm:source-map@0.5.7"
        }
      },
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      },
      "npm:express@4.15.4": {
        "map": {
          "merge-descriptors": "npm:merge-descriptors@1.0.1",
          "path-to-regexp": "npm:path-to-regexp@0.1.7",
          "array-flatten": "npm:array-flatten@1.1.1",
          "encodeurl": "npm:encodeurl@1.0.1",
          "cookie": "npm:cookie@0.3.1",
          "send": "npm:send@0.15.4",
          "vary": "npm:vary@1.1.1",
          "setprototypeof": "npm:setprototypeof@1.0.3",
          "type-is": "npm:type-is@1.6.15",
          "accepts": "npm:accepts@1.3.4",
          "parseurl": "npm:parseurl@1.3.1",
          "qs": "npm:qs@6.5.0",
          "utils-merge": "npm:utils-merge@1.0.0",
          "depd": "npm:depd@1.1.1",
          "fresh": "npm:fresh@0.5.0",
          "debug": "npm:debug@2.6.8",
          "range-parser": "npm:range-parser@1.2.0",
          "proxy-addr": "npm:proxy-addr@1.1.5",
          "content-disposition": "npm:content-disposition@0.5.2",
          "on-finished": "npm:on-finished@2.3.0",
          "serve-static": "npm:serve-static@1.12.4",
          "escape-html": "npm:escape-html@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "etag": "npm:etag@1.8.0",
          "cookie-signature": "npm:cookie-signature@1.0.6",
          "content-type": "npm:content-type@1.0.2",
          "finalhandler": "npm:finalhandler@1.0.4",
          "methods": "npm:methods@1.1.2"
        }
      },
      "npm:send@0.15.4": {
        "map": {
          "encodeurl": "npm:encodeurl@1.0.1",
          "depd": "npm:depd@1.1.1",
          "fresh": "npm:fresh@0.5.0",
          "debug": "npm:debug@2.6.8",
          "range-parser": "npm:range-parser@1.2.0",
          "mime": "npm:mime@1.3.4",
          "on-finished": "npm:on-finished@2.3.0",
          "escape-html": "npm:escape-html@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "etag": "npm:etag@1.8.0",
          "http-errors": "npm:http-errors@1.6.2",
          "destroy": "npm:destroy@1.0.4",
          "ms": "npm:ms@2.0.0"
        }
      },
      "npm:serve-static@1.12.4": {
        "map": {
          "encodeurl": "npm:encodeurl@1.0.1",
          "parseurl": "npm:parseurl@1.3.1",
          "send": "npm:send@0.15.4",
          "escape-html": "npm:escape-html@1.0.3"
        }
      },
      "npm:type-is@1.6.15": {
        "map": {
          "media-typer": "npm:media-typer@0.3.0",
          "mime-types": "npm:mime-types@2.1.17"
        }
      },
      "npm:http-errors@1.6.2": {
        "map": {
          "depd": "npm:depd@1.1.1",
          "setprototypeof": "npm:setprototypeof@1.0.3",
          "statuses": "npm:statuses@1.3.1",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:proxy-addr@1.1.5": {
        "map": {
          "ipaddr.js": "npm:ipaddr.js@1.4.0",
          "forwarded": "npm:forwarded@0.1.0"
        }
      },
      "npm:accepts@1.3.4": {
        "map": {
          "negotiator": "npm:negotiator@0.6.1",
          "mime-types": "npm:mime-types@2.1.17"
        }
      },
      "npm:on-finished@2.3.0": {
        "map": {
          "ee-first": "npm:ee-first@1.1.1"
        }
      },
      "npm:finalhandler@1.0.4": {
        "map": {
          "debug": "npm:debug@2.6.8",
          "encodeurl": "npm:encodeurl@1.0.1",
          "escape-html": "npm:escape-html@1.0.3",
          "on-finished": "npm:on-finished@2.3.0",
          "parseurl": "npm:parseurl@1.3.1",
          "statuses": "npm:statuses@1.3.1",
          "unpipe": "npm:unpipe@1.0.0"
        }
      },
      "npm:mime-types@2.1.17": {
        "map": {
          "mime-db": "npm:mime-db@1.30.0"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "noImplicitAny": true,
    "tsconfig": true
  },
  packages: {
    "jspm-typescript-react-boilerplate": {
      "main": "server",
      "defaultExtension": "ts",
      "format": "esm",
      "meta": {
        "*.tsx": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "bcrypt": "npm:bcrypt@2.0.1",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "bcryptjs": "npm:bcryptjs@2.4.3",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "dotenv": "npm:dotenv@4.0.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jsbn": "npm:jsbn@0.1.1",
    "jsonwebtoken": "npm:jsonwebtoken@8.1.1",
    "jss": "npm:jss@9.8.1",
    "material-ui": "npm:material-ui@next",
    "mobx": "npm:mobx@4.1.1",
    "mobx-react": "npm:mobx-react@5.0.0",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "passport": "npm:passport@0.4.0",
    "passport-local": "npm:passport-local@1.0.0",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "pg": "npm:pg@7.4.1",
    "pg-native": "npm:pg-native@2.2.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "react": "npm:react@16.3.1",
    "react-dom": "npm:react-dom@16.3.1",
    "react-jss": "npm:react-jss@8.4.0",
    "react-router": "npm:react-router@4.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "uuid": "npm:uuid@3.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.1.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.7",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.21"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.1"
      }
    },
    "npm:passport@0.4.0": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0",
        "pause": "npm:pause@0.0.1"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randomfill": "npm:randomfill@1.0.4",
        "create-hmac": "npm:create-hmac@1.1.7",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "public-encrypt": "npm:public-encrypt@4.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "randombytes": "npm:randombytes@2.0.6",
        "create-ecdh": "npm:create-ecdh@4.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.1"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:pg@7.4.1": {
      "map": {
        "js-string-escape": "npm:js-string-escape@1.0.1",
        "buffer-writer": "npm:buffer-writer@1.0.1",
        "pg-connection-string": "npm:pg-connection-string@0.1.3",
        "packet-reader": "npm:packet-reader@0.3.1",
        "pgpass": "npm:pgpass@1.0.2",
        "pg-pool": "npm:pg-pool@2.0.3",
        "semver": "npm:semver@4.3.2",
        "pg-types": "npm:pg-types@1.12.1"
      }
    },
    "npm:pgpass@1.0.2": {
      "map": {
        "split": "npm:split@1.0.1"
      }
    },
    "npm:split@1.0.1": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:pg-types@1.12.1": {
      "map": {
        "postgres-array": "npm:postgres-array@1.0.2",
        "postgres-bytea": "npm:postgres-bytea@1.0.0",
        "postgres-date": "npm:postgres-date@1.0.3",
        "postgres-interval": "npm:postgres-interval@1.1.1"
      }
    },
    "npm:postgres-interval@1.1.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jsonwebtoken@8.1.1": {
      "map": {
        "jws": "npm:jws@3.1.4",
        "lodash.isinteger": "npm:lodash.isinteger@4.0.4",
        "lodash.includes": "npm:lodash.includes@4.3.0",
        "lodash.isboolean": "npm:lodash.isboolean@3.0.3",
        "lodash.isnumber": "npm:lodash.isnumber@3.0.3",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
        "lodash.once": "npm:lodash.once@4.1.1",
        "ms": "npm:ms@2.1.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jws@3.1.4": {
      "map": {
        "jwa": "npm:jwa@1.1.5",
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:jwa@1.1.5": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.9",
        "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1"
      }
    },
    "npm:ecdsa-sig-formatter@1.0.9": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:passport-local@1.0.0": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0"
      }
    },
    "npm:pg-native@2.2.0": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.31",
        "libpq": "npm:libpq@1.8.7",
        "pg-types": "npm:pg-types@1.12.1"
      }
    },
    "npm:readable-stream@1.0.31": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:libpq@1.8.7": {
      "map": {
        "nan": "npm:nan@2.10.0",
        "bindings": "npm:bindings@1.2.1"
      }
    },
    "npm:react-router@4.2.0": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "history": "npm:history@4.7.2",
        "prop-types": "npm:prop-types@15.6.1",
        "invariant": "npm:invariant@2.2.4",
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:history@4.7.2": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "invariant": "npm:invariant@2.2.4",
        "value-equal": "npm:value-equal@0.4.0",
        "resolve-pathname": "npm:resolve-pathname@2.2.0",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:prop-types@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.17",
        "core-js": "npm:core-js@1.2.7",
        "loose-envify": "npm:loose-envify@1.3.1",
        "setimmediate": "npm:setimmediate@1.0.5"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:invariant@2.2.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:stream-http@2.8.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "inherits": "npm:inherits@2.0.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "string_decoder": "npm:string_decoder@1.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "base64-js": "npm:base64-js@1.3.0",
        "ieee754": "npm:ieee754@1.1.11"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:material-ui@next": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "brcast": "npm:brcast@3.0.1",
        "@types/react-transition-group": "npm:@types/react-transition-group@2.0.7",
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "scroll": "npm:scroll@2.0.3",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.1.0",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "react-transition-group": "npm:react-transition-group@2.3.0",
        "keycode": "npm:keycode@2.2.0",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@1.1.4",
        "@types/jss": "npm:@types/jss@9.5.2",
        "deepmerge": "npm:deepmerge@2.1.0",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-nested": "npm:jss-nested@6.0.1",
        "classnames": "npm:classnames@2.2.5",
        "recompose": "npm:recompose@0.26.0",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-jss": "npm:react-jss@8.4.0",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "react-popper": "npm:react-popper@0.8.3",
        "lodash": "npm:lodash@4.17.5",
        "react-event-listener": "npm:react-event-listener@0.5.3",
        "jss": "npm:jss@9.8.1"
      }
    },
    "npm:react-transition-group@2.3.0": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "prop-types": "npm:prop-types@15.6.1",
        "chain-function": "npm:chain-function@1.0.0",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:jss-nested@6.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-scrollbar-size@2.1.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "stifle": "npm:stifle@1.0.4",
        "react-event-listener": "npm:react-event-listener@0.5.3"
      }
    },
    "npm:recompose@0.26.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "change-emitter": "npm:change-emitter@0.1.6",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:scroll@2.0.3": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:jss-camel-case@6.1.0": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:@types/jss@9.5.2": {
      "map": {
        "indefinite-observable": "npm:indefinite-observable@1.0.1",
        "csstype": "npm:csstype@2.1.1"
      }
    },
    "npm:react-jss@8.4.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "prop-types": "npm:prop-types@15.6.1",
        "jss": "npm:jss@9.8.1",
        "theming": "npm:theming@1.3.0",
        "jss-preset-default": "npm:jss-preset-default@4.3.0"
      }
    },
    "npm:react-popper@0.8.3": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "popper.js": "npm:popper.js@1.14.3"
      }
    },
    "npm:jss-vendor-prefixer@7.0.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:react@16.3.1": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.4",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:react-event-listener@0.5.3": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "warning": "npm:warning@3.0.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "fbjs": "npm:fbjs@0.8.16"
      }
    },
    "npm:indefinite-observable@1.0.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:jss@9.8.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "warning": "npm:warning@3.0.0",
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:rafl@1.2.2": {
      "map": {
        "global": "npm:global@4.3.2"
      }
    },
    "npm:css-vendor@0.3.8": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:theming@1.3.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "brcast": "npm:brcast@3.0.1",
        "is-function": "npm:is-function@1.0.1",
        "is-plain-object": "npm:is-plain-object@2.0.4"
      }
    },
    "npm:jss-preset-default@4.3.0": {
      "map": {
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-compose": "npm:jss-compose@5.0.0",
        "jss-expand": "npm:jss-expand@5.1.0",
        "jss-extend": "npm:jss-extend@6.2.0",
        "jss-template": "npm:jss-template@1.0.1"
      }
    },
    "npm:react-dom@16.3.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:@types/react-transition-group@2.0.7": {
      "map": {
        "@types/react": "npm:@types/react@16.3.5"
      }
    },
    "npm:@types/react@16.3.5": {
      "map": {
        "csstype": "npm:csstype@2.1.1"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:jss-compose@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-extend@6.2.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:jss-template@1.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:mobx-react@5.0.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0"
      }
    },
    "npm:iconv-lite@0.4.21": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "create-hash": "npm:create-hash@1.2.0",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.1",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:create-ecdh@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "inherits": "npm:inherits@2.0.3",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:parse-asn1@5.1.1": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:bcrypt@2.0.1": {
      "map": {
        "nan": "npm:nan@2.10.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.9.1"
      }
    },
    "npm:node-pre-gyp@0.9.1": {
      "map": {
        "nopt": "npm:nopt@4.0.1",
        "detect-libc": "npm:detect-libc@1.0.3",
        "npm-packlist": "npm:npm-packlist@1.1.10",
        "mkdirp": "npm:mkdirp@0.5.1",
        "npmlog": "npm:npmlog@4.1.2",
        "needle": "npm:needle@2.2.1",
        "rimraf": "npm:rimraf@2.6.2",
        "semver": "npm:semver@5.5.0",
        "tar": "npm:tar@4.4.1",
        "rc": "npm:rc@1.2.6"
      }
    },
    "npm:needle@2.2.1": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.21",
        "debug": "npm:debug@2.6.8",
        "sax": "npm:sax@1.2.4"
      }
    },
    "npm:nopt@4.0.1": {
      "map": {
        "abbrev": "npm:abbrev@1.1.1",
        "osenv": "npm:osenv@0.1.5"
      }
    },
    "npm:npm-packlist@1.1.10": {
      "map": {
        "npm-bundled": "npm:npm-bundled@1.0.3",
        "ignore-walk": "npm:ignore-walk@3.0.1"
      }
    },
    "npm:npmlog@4.1.2": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "set-blocking": "npm:set-blocking@2.0.0",
        "gauge": "npm:gauge@2.7.4",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:tar@4.4.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "chownr": "npm:chownr@1.0.1",
        "fs-minipass": "npm:fs-minipass@1.2.5",
        "minizlib": "npm:minizlib@1.1.0",
        "minipass": "npm:minipass@2.2.4",
        "yallist": "npm:yallist@3.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:osenv@0.1.5": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:ignore-walk@3.0.1": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4"
      }
    },
    "npm:fs-minipass@1.2.5": {
      "map": {
        "minipass": "npm:minipass@2.2.4"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "string-width": "npm:string-width@1.0.2",
        "signal-exit": "npm:signal-exit@3.0.2",
        "wide-align": "npm:wide-align@1.1.2",
        "object-assign": "npm:object-assign@4.1.1",
        "aproba": "npm:aproba@1.2.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:minizlib@1.1.0": {
      "map": {
        "minipass": "npm:minipass@2.2.4"
      }
    },
    "npm:minipass@2.2.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "yallist": "npm:yallist@3.0.2"
      }
    },
    "npm:rimraf@2.6.2": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:wide-align@1.1.2": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4",
        "inherits": "npm:inherits@2.0.3",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0"
      }
    },
    "npm:are-we-there-yet@1.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.11"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:brace-expansion@1.1.11": {
      "map": {
        "balanced-match": "npm:balanced-match@1.0.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:rc@1.2.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "deep-extend": "npm:deep-extend@0.4.2",
        "ini": "npm:ini@1.3.5",
        "strip-json-comments": "npm:strip-json-comments@2.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.7",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "create-hash": "npm:create-hash@1.2.0",
        "sha.js": "npm:sha.js@2.4.11",
        "ripemd160": "npm:ripemd160@2.0.2"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    }
  }
});
