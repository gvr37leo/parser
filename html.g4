grammar html;

html    :'<'TEXT'>' ((html*)|TEXT)? '</'TEXT'>';

WS      : [ \t\n\r] + -> skip;
TEXT    :[a-z]+;
