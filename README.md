# Thyme UI Components

Demo: https://metadream.github.io/thyme

## Usage

```
<script src="dist/thyme.js"></script>
```

If you want to use the formulas, you also need to import

```
<script src="https://cdn.unpkg.net/~metadream/assets/lib/asciimath.js"></script>
```

## Components

```
<th-formula>E=mc^2</th-formula>
<th-button>Submit</th-button>
<th-field label="Username" name="username" maxlength="10" required></th-field>
<th-calendar label="Birthdate" name="birthdate"></th-calendar>
<th-switch name="isMember"></th-switch>

<th-checkgroup label="Hobbies" name="hobbies" required>
    <th-checkbox value="football">Football</th-checkbox>
    <th-checkbox value="basketball" checked>Basketball</th-checkbox>
</th-checkgroup>

<th-select type="text" label="Brand" name="brand" required>
    <option></option>
    <option value="1">iPhone</option>
    <option value="2" disabled>Samsang</option>
</th-select>

<th-upload label="Attachments" name="attachments" accept="image/*" multiple="5" maxsize="20000240"
 editable required></th-upload>

<th-textbox label="Remark" name="remark" required>
    This is remark content.
</th-textbox>

<th-dialog>
    This is a dialog!
</th-dialog>

<th-waterfall column="3" spacing="10" class="gallery">
    <div><br>1</div>
    <div><br><br>2</div>
    <div><br><br><br><br>3</div>
    <div><br>4</div>
    <div><br><br><br>5</div>
    <div><br>6</div>
    <div><br><br>7</div>
    <div><br><br><br><br><br><br>8</div>
    <div><br><br><br><br>9</div>
    <div><br><br><br><br><br>10</div>
</th-waterfall>

<th-toptray></th-toptray>
```

## Modules

### WebSocket

```
const channel = new Thyme.Channel('ws://endpoint');
channel.on('message', (data) => console.log(data));
```

### Form

```
const object = Thyme.form.getJsonObject('selector');
const array = Thyme.form.getJsonArray('selector>children');
```

### Http

```
# get, post, put, patch, delete
Thyme.http.post('/path', data).then(res => {
    console.log(res);
})
```

### Utils

```
Thyme.util.nanoId(24);
Thyme.util.createElement('<div class="test"></div>');
Thyme.util.formatDate(new Date(), 'yyyy-MM-dd hh:mm');
Thyme.util.formatDecimal(10.3212123, 2);
Thyme.util.formatBytes(28932892);
Thyme.util.parseDuration('3:20');
Thyme.util.formatSeconds(280);
Thyme.util.stringify({a:1, b:2});
Thyme.util.base64Encode('plain text');
Thyme.util.svg2png(svgElement);
Thyme.util.toDataURI(svgHTML);
```
