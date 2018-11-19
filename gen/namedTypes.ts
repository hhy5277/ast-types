/* !!! THIS FILE WAS AUTO-GENERATED BY `npm run gen` !!! */
import { TypeType as Type } from "../lib/types";
import * as N from "./nodes";

export interface NamedTypes {
  Printable: Type<N.Printable>;
  SourceLocation: Type<N.SourceLocation>;
  Node: Type<N.Node>;
  Comment: Type<N.Comment>;
  Position: Type<N.Position>;
  File: Type<N.File>;
  Program: Type<N.Program>;
  Statement: Type<N.Statement>;
  Function: Type<N.Function>;
  Pattern: Type<N.Pattern>;
  Expression: Type<N.Expression>;
  Identifier: Type<N.Identifier>;
  BlockStatement: Type<N.BlockStatement>;
  EmptyStatement: Type<N.EmptyStatement>;
  ExpressionStatement: Type<N.ExpressionStatement>;
  IfStatement: Type<N.IfStatement>;
  LabeledStatement: Type<N.LabeledStatement>;
  BreakStatement: Type<N.BreakStatement>;
  ContinueStatement: Type<N.ContinueStatement>;
  WithStatement: Type<N.WithStatement>;
  SwitchStatement: Type<N.SwitchStatement>;
  SwitchCase: Type<N.SwitchCase>;
  ReturnStatement: Type<N.ReturnStatement>;
  ThrowStatement: Type<N.ThrowStatement>;
  TryStatement: Type<N.TryStatement>;
  CatchClause: Type<N.CatchClause>;
  WhileStatement: Type<N.WhileStatement>;
  DoWhileStatement: Type<N.DoWhileStatement>;
  ForStatement: Type<N.ForStatement>;
  Declaration: Type<N.Declaration>;
  VariableDeclaration: Type<N.VariableDeclaration>;
  ForInStatement: Type<N.ForInStatement>;
  DebuggerStatement: Type<N.DebuggerStatement>;
  FunctionDeclaration: Type<N.FunctionDeclaration>;
  FunctionExpression: Type<N.FunctionExpression>;
  VariableDeclarator: Type<N.VariableDeclarator>;
  ThisExpression: Type<N.ThisExpression>;
  ArrayExpression: Type<N.ArrayExpression>;
  ObjectExpression: Type<N.ObjectExpression>;
  Property: Type<N.Property>;
  Literal: Type<N.Literal>;
  SequenceExpression: Type<N.SequenceExpression>;
  UnaryExpression: Type<N.UnaryExpression>;
  BinaryExpression: Type<N.BinaryExpression>;
  AssignmentExpression: Type<N.AssignmentExpression>;
  UpdateExpression: Type<N.UpdateExpression>;
  LogicalExpression: Type<N.LogicalExpression>;
  ConditionalExpression: Type<N.ConditionalExpression>;
  NewExpression: Type<N.NewExpression>;
  CallExpression: Type<N.CallExpression>;
  MemberExpression: Type<N.MemberExpression>;
  RestElement: Type<N.RestElement>;
  TypeAnnotation: Type<N.TypeAnnotation>;
  TSTypeAnnotation: Type<N.TSTypeAnnotation>;
  SpreadElementPattern: Type<N.SpreadElementPattern>;
  ArrowFunctionExpression: Type<N.ArrowFunctionExpression>;
  ForOfStatement: Type<N.ForOfStatement>;
  YieldExpression: Type<N.YieldExpression>;
  GeneratorExpression: Type<N.GeneratorExpression>;
  ComprehensionBlock: Type<N.ComprehensionBlock>;
  ComprehensionExpression: Type<N.ComprehensionExpression>;
  PropertyPattern: Type<N.PropertyPattern>;
  ObjectPattern: Type<N.ObjectPattern>;
  ArrayPattern: Type<N.ArrayPattern>;
  MethodDefinition: Type<N.MethodDefinition>;
  SpreadElement: Type<N.SpreadElement>;
  AssignmentPattern: Type<N.AssignmentPattern>;
  ClassPropertyDefinition: Type<N.ClassPropertyDefinition>;
  ClassProperty: Type<N.ClassProperty>;
  ClassBody: Type<N.ClassBody>;
  ClassDeclaration: Type<N.ClassDeclaration>;
  ClassExpression: Type<N.ClassExpression>;
  Specifier: Type<N.Specifier>;
  ModuleSpecifier: Type<N.ModuleSpecifier>;
  ImportSpecifier: Type<N.ImportSpecifier>;
  ImportNamespaceSpecifier: Type<N.ImportNamespaceSpecifier>;
  ImportDefaultSpecifier: Type<N.ImportDefaultSpecifier>;
  ImportDeclaration: Type<N.ImportDeclaration>;
  TaggedTemplateExpression: Type<N.TaggedTemplateExpression>;
  TemplateLiteral: Type<N.TemplateLiteral>;
  TemplateElement: Type<N.TemplateElement>;
  SpreadProperty: Type<N.SpreadProperty>;
  SpreadPropertyPattern: Type<N.SpreadPropertyPattern>;
  AwaitExpression: Type<N.AwaitExpression>;
  LetStatement: Type<N.LetStatement>;
  LetExpression: Type<N.LetExpression>;
  GraphExpression: Type<N.GraphExpression>;
  GraphIndexExpression: Type<N.GraphIndexExpression>;
  XMLDefaultDeclaration: Type<N.XMLDefaultDeclaration>;
  XMLAnyName: Type<N.XMLAnyName>;
  XMLQualifiedIdentifier: Type<N.XMLQualifiedIdentifier>;
  XMLFunctionQualifiedIdentifier: Type<N.XMLFunctionQualifiedIdentifier>;
  XMLAttributeSelector: Type<N.XMLAttributeSelector>;
  XMLFilterExpression: Type<N.XMLFilterExpression>;
  XML: Type<N.XML>;
  XMLElement: Type<N.XMLElement>;
  XMLList: Type<N.XMLList>;
  XMLEscape: Type<N.XMLEscape>;
  XMLText: Type<N.XMLText>;
  XMLStartTag: Type<N.XMLStartTag>;
  XMLEndTag: Type<N.XMLEndTag>;
  XMLPointTag: Type<N.XMLPointTag>;
  XMLName: Type<N.XMLName>;
  XMLAttribute: Type<N.XMLAttribute>;
  XMLCdata: Type<N.XMLCdata>;
  XMLComment: Type<N.XMLComment>;
  XMLProcessingInstruction: Type<N.XMLProcessingInstruction>;
  JSXAttribute: Type<N.JSXAttribute>;
  JSXIdentifier: Type<N.JSXIdentifier>;
  JSXNamespacedName: Type<N.JSXNamespacedName>;
  JSXExpressionContainer: Type<N.JSXExpressionContainer>;
  JSXMemberExpression: Type<N.JSXMemberExpression>;
  JSXSpreadAttribute: Type<N.JSXSpreadAttribute>;
  JSXElement: Type<N.JSXElement>;
  JSXOpeningElement: Type<N.JSXOpeningElement>;
  JSXClosingElement: Type<N.JSXClosingElement>;
  JSXFragment: Type<N.JSXFragment>;
  JSXText: Type<N.JSXText>;
  JSXOpeningFragment: Type<N.JSXOpeningFragment>;
  JSXClosingFragment: Type<N.JSXClosingFragment>;
  JSXEmptyExpression: Type<N.JSXEmptyExpression>;
  JSXSpreadChild: Type<N.JSXSpreadChild>;
  Flow: Type<N.Flow>;
  FlowType: Type<N.FlowType>;
  AnyTypeAnnotation: Type<N.AnyTypeAnnotation>;
  EmptyTypeAnnotation: Type<N.EmptyTypeAnnotation>;
  MixedTypeAnnotation: Type<N.MixedTypeAnnotation>;
  VoidTypeAnnotation: Type<N.VoidTypeAnnotation>;
  NumberTypeAnnotation: Type<N.NumberTypeAnnotation>;
  NumberLiteralTypeAnnotation: Type<N.NumberLiteralTypeAnnotation>;
  NumericLiteralTypeAnnotation: Type<N.NumericLiteralTypeAnnotation>;
  StringTypeAnnotation: Type<N.StringTypeAnnotation>;
  StringLiteralTypeAnnotation: Type<N.StringLiteralTypeAnnotation>;
  BooleanTypeAnnotation: Type<N.BooleanTypeAnnotation>;
  BooleanLiteralTypeAnnotation: Type<N.BooleanLiteralTypeAnnotation>;
  NullableTypeAnnotation: Type<N.NullableTypeAnnotation>;
  NullLiteralTypeAnnotation: Type<N.NullLiteralTypeAnnotation>;
  NullTypeAnnotation: Type<N.NullTypeAnnotation>;
  ThisTypeAnnotation: Type<N.ThisTypeAnnotation>;
  ExistsTypeAnnotation: Type<N.ExistsTypeAnnotation>;
  ExistentialTypeParam: Type<N.ExistentialTypeParam>;
  FunctionTypeAnnotation: Type<N.FunctionTypeAnnotation>;
  FunctionTypeParam: Type<N.FunctionTypeParam>;
  TypeParameterDeclaration: Type<N.TypeParameterDeclaration>;
  ArrayTypeAnnotation: Type<N.ArrayTypeAnnotation>;
  ObjectTypeAnnotation: Type<N.ObjectTypeAnnotation>;
  ObjectTypeProperty: Type<N.ObjectTypeProperty>;
  ObjectTypeSpreadProperty: Type<N.ObjectTypeSpreadProperty>;
  ObjectTypeIndexer: Type<N.ObjectTypeIndexer>;
  ObjectTypeCallProperty: Type<N.ObjectTypeCallProperty>;
  Variance: Type<N.Variance>;
  QualifiedTypeIdentifier: Type<N.QualifiedTypeIdentifier>;
  GenericTypeAnnotation: Type<N.GenericTypeAnnotation>;
  TypeParameterInstantiation: Type<N.TypeParameterInstantiation>;
  MemberTypeAnnotation: Type<N.MemberTypeAnnotation>;
  UnionTypeAnnotation: Type<N.UnionTypeAnnotation>;
  IntersectionTypeAnnotation: Type<N.IntersectionTypeAnnotation>;
  TypeofTypeAnnotation: Type<N.TypeofTypeAnnotation>;
  TypeParameter: Type<N.TypeParameter>;
  ClassImplements: Type<N.ClassImplements>;
  InterfaceDeclaration: Type<N.InterfaceDeclaration>;
  InterfaceExtends: Type<N.InterfaceExtends>;
  DeclareInterface: Type<N.DeclareInterface>;
  TypeAlias: Type<N.TypeAlias>;
  OpaqueType: Type<N.OpaqueType>;
  DeclareTypeAlias: Type<N.DeclareTypeAlias>;
  DeclareOpaqueType: Type<N.DeclareOpaqueType>;
  TypeCastExpression: Type<N.TypeCastExpression>;
  TupleTypeAnnotation: Type<N.TupleTypeAnnotation>;
  DeclareVariable: Type<N.DeclareVariable>;
  DeclareFunction: Type<N.DeclareFunction>;
  DeclareClass: Type<N.DeclareClass>;
  DeclareModule: Type<N.DeclareModule>;
  DeclareModuleExports: Type<N.DeclareModuleExports>;
  DeclareExportDeclaration: Type<N.DeclareExportDeclaration>;
  ExportSpecifier: Type<N.ExportSpecifier>;
  ExportBatchSpecifier: Type<N.ExportBatchSpecifier>;
  DeclareExportAllDeclaration: Type<N.DeclareExportAllDeclaration>;
  FlowPredicate: Type<N.FlowPredicate>;
  InferredPredicate: Type<N.InferredPredicate>;
  DeclaredPredicate: Type<N.DeclaredPredicate>;
  ExportDeclaration: Type<N.ExportDeclaration>;
  Block: Type<N.Block>;
  Line: Type<N.Line>;
  Noop: Type<N.Noop>;
  DoExpression: Type<N.DoExpression>;
  Super: Type<N.Super>;
  BindExpression: Type<N.BindExpression>;
  Decorator: Type<N.Decorator>;
  MetaProperty: Type<N.MetaProperty>;
  ParenthesizedExpression: Type<N.ParenthesizedExpression>;
  ExportDefaultDeclaration: Type<N.ExportDefaultDeclaration>;
  ExportNamedDeclaration: Type<N.ExportNamedDeclaration>;
  ExportNamespaceSpecifier: Type<N.ExportNamespaceSpecifier>;
  ExportDefaultSpecifier: Type<N.ExportDefaultSpecifier>;
  ExportAllDeclaration: Type<N.ExportAllDeclaration>;
  CommentBlock: Type<N.CommentBlock>;
  CommentLine: Type<N.CommentLine>;
  Directive: Type<N.Directive>;
  DirectiveLiteral: Type<N.DirectiveLiteral>;
  StringLiteral: Type<N.StringLiteral>;
  NumericLiteral: Type<N.NumericLiteral>;
  BigIntLiteral: Type<N.BigIntLiteral>;
  NullLiteral: Type<N.NullLiteral>;
  BooleanLiteral: Type<N.BooleanLiteral>;
  RegExpLiteral: Type<N.RegExpLiteral>;
  ObjectMethod: Type<N.ObjectMethod>;
  ObjectProperty: Type<N.ObjectProperty>;
  ClassMethod: Type<N.ClassMethod>;
  RestProperty: Type<N.RestProperty>;
  ForAwaitStatement: Type<N.ForAwaitStatement>;
  Import: Type<N.Import>;
  TSType: Type<N.TSType>;
  TSQualifiedName: Type<N.TSQualifiedName>;
  TSTypeReference: Type<N.TSTypeReference>;
  TSTypeParameterInstantiation: Type<N.TSTypeParameterInstantiation>;
  TSHasOptionalTypeParameters: Type<N.TSHasOptionalTypeParameters>;
  TSTypeParameterDeclaration: Type<N.TSTypeParameterDeclaration>;
  TSHasOptionalTypeAnnotation: Type<N.TSHasOptionalTypeAnnotation>;
  TSAsExpression: Type<N.TSAsExpression>;
  TSNonNullExpression: Type<N.TSNonNullExpression>;
  TSAnyKeyword: Type<N.TSAnyKeyword>;
  TSBooleanKeyword: Type<N.TSBooleanKeyword>;
  TSNeverKeyword: Type<N.TSNeverKeyword>;
  TSNullKeyword: Type<N.TSNullKeyword>;
  TSNumberKeyword: Type<N.TSNumberKeyword>;
  TSObjectKeyword: Type<N.TSObjectKeyword>;
  TSStringKeyword: Type<N.TSStringKeyword>;
  TSSymbolKeyword: Type<N.TSSymbolKeyword>;
  TSUndefinedKeyword: Type<N.TSUndefinedKeyword>;
  TSUnknownKeyword: Type<N.TSUnknownKeyword>;
  TSVoidKeyword: Type<N.TSVoidKeyword>;
  TSThisType: Type<N.TSThisType>;
  TSArrayType: Type<N.TSArrayType>;
  TSLiteralType: Type<N.TSLiteralType>;
  TSUnionType: Type<N.TSUnionType>;
  TSIntersectionType: Type<N.TSIntersectionType>;
  TSConditionalType: Type<N.TSConditionalType>;
  TSInferType: Type<N.TSInferType>;
  TSTypeParameter: Type<N.TSTypeParameter>;
  TSParenthesizedType: Type<N.TSParenthesizedType>;
  TSFunctionType: Type<N.TSFunctionType>;
  TSConstructorType: Type<N.TSConstructorType>;
  TSDeclareFunction: Type<N.TSDeclareFunction>;
  TSDeclareMethod: Type<N.TSDeclareMethod>;
  TSMappedType: Type<N.TSMappedType>;
  TSTupleType: Type<N.TSTupleType>;
  TSRestType: Type<N.TSRestType>;
  TSOptionalType: Type<N.TSOptionalType>;
  TSIndexedAccessType: Type<N.TSIndexedAccessType>;
  TSTypeOperator: Type<N.TSTypeOperator>;
  TSIndexSignature: Type<N.TSIndexSignature>;
  TSPropertySignature: Type<N.TSPropertySignature>;
  TSMethodSignature: Type<N.TSMethodSignature>;
  TSTypePredicate: Type<N.TSTypePredicate>;
  TSCallSignatureDeclaration: Type<N.TSCallSignatureDeclaration>;
  TSConstructSignatureDeclaration: Type<N.TSConstructSignatureDeclaration>;
  TSEnumMember: Type<N.TSEnumMember>;
  TSTypeQuery: Type<N.TSTypeQuery>;
  TSTypeLiteral: Type<N.TSTypeLiteral>;
  TSTypeAssertion: Type<N.TSTypeAssertion>;
  TSEnumDeclaration: Type<N.TSEnumDeclaration>;
  TSTypeAliasDeclaration: Type<N.TSTypeAliasDeclaration>;
  TSModuleBlock: Type<N.TSModuleBlock>;
  TSModuleDeclaration: Type<N.TSModuleDeclaration>;
  TSImportEqualsDeclaration: Type<N.TSImportEqualsDeclaration>;
  TSExternalModuleReference: Type<N.TSExternalModuleReference>;
  TSExportAssignment: Type<N.TSExportAssignment>;
  TSNamespaceExportDeclaration: Type<N.TSNamespaceExportDeclaration>;
  TSInterfaceBody: Type<N.TSInterfaceBody>;
  TSExpressionWithTypeArguments: Type<N.TSExpressionWithTypeArguments>;
  TSInterfaceDeclaration: Type<N.TSInterfaceDeclaration>;
  TSParameterProperty: Type<N.TSParameterProperty>;
  OptionalMemberExpression: Type<N.OptionalMemberExpression>;
  OptionalCallExpression: Type<N.OptionalCallExpression>;
}