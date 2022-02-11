# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BootstrapCleanup <a name="BootstrapCleanup" id="cdk-bootstrap-cleanup.BootstrapCleanup"></a>

Construct to clean up a given asset.

#### Initializers <a name="Initializers" id="cdk-bootstrap-cleanup.BootstrapCleanup.Initializer"></a>

```typescript
import { BootstrapCleanup } from 'cdk-bootstrap-cleanup'

new BootstrapCleanup(scope: Construct, id: string, props: BootstrapCleanupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanupProps">BootstrapCleanupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-bootstrap-cleanup.BootstrapCleanup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-bootstrap-cleanup.BootstrapCleanupProps">BootstrapCleanupProps</a>

---





## Structs <a name="Structs" id="Structs"></a>

### BootstrapCleanupProps <a name="BootstrapCleanupProps" id="cdk-bootstrap-cleanup.BootstrapCleanupProps"></a>

#### Initializer <a name="Initializer" id="cdk-bootstrap-cleanup.BootstrapCleanupProps.Initializer"></a>

```typescript
import { BootstrapCleanupProps } from 'cdk-bootstrap-cleanup'

const bootstrapCleanupProps: BootstrapCleanupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanupProps.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanupProps.property.key">key</a></code> | <code>string</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-bootstrap-cleanup.BootstrapCleanupProps.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-bootstrap-cleanup.BootstrapCleanupProps.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### BootstrapCleanupAspect <a name="BootstrapCleanupAspect" id="cdk-bootstrap-cleanup.BootstrapCleanupAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="cdk-bootstrap-cleanup.BootstrapCleanupAspect.Initializer"></a>

```typescript
import { BootstrapCleanupAspect } from 'cdk-bootstrap-cleanup'

new BootstrapCleanupAspect()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-bootstrap-cleanup.BootstrapCleanupAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="cdk-bootstrap-cleanup.BootstrapCleanupAspect.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-bootstrap-cleanup.BootstrapCleanupAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---





