package gw.specContrib.featureLiterals.javaMembersBinding

class Errant_BindJavaProperties {
  //binding java class property
  var javaInternalNameProp = JavaClass#JavaInternalName
  var javaPrivateNameProp = JavaClass#JavaPrivateName
  var javaProtectedNameProp = JavaClass#JavaProtectedName
  var javaPublicNameProp = JavaClass#JavaPublicName

  function getSetPropertiesFeatureLiterals() {
    var jInstance: JavaClass
    //set the values
    //correct arguments
    javaInternalNameProp.set(jInstance, "Ed")
    javaPrivateNameProp.set(jInstance, "Ed")
    javaProtectedNameProp.set(jInstance, "Ed")
    javaPublicNameProp.set(jInstance, "Ed")

    //incorrect arguments
    javaInternalNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaInternalNameProp.set(jInstance, 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaInternalNameProp.set("Ed")      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    javaInternalNameProp.set("Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaPrivateNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaPrivateNameProp.set(jInstance, 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaPrivateNameProp.set("Ed")      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    javaPrivateNameProp.set("Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaProtectedNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaProtectedNameProp.set(jInstance, 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaProtectedNameProp.set("Ed")      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    javaProtectedNameProp.set("Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaPublicNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaPublicNameProp.set(jInstance, 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaPublicNameProp.set("Ed")      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    javaPublicNameProp.set("Ed", 42)      //## issuekeys: 'SET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    //get the values
    var x1111 = javaInternalNameProp.get(jInstance)
    var x1112 = javaInternalNameProp.get("hi")      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    var x1113 = javaInternalNameProp.get()      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '()'

    var x1121 = javaPrivateNameProp.get(jInstance)
    var x1122 = javaPrivateNameProp.get("hi")      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    var x1123 = javaPrivateNameProp.get()      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '()'

    var x1131 = javaProtectedNameProp.get(jInstance)
    var x1132 = javaProtectedNameProp.get("hi")      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    var x1133 = javaProtectedNameProp.get()      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '()'

    var x1141 = javaPublicNameProp.get(jInstance)
    var x1142 = javaPublicNameProp.get("hi")      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'
    var x1143 = javaPublicNameProp.get()      //## issuekeys: 'GET(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)' IN 'GW.LANG.REFLECT.FEATURES.PROPERTYREFERENCE' CANNOT BE APPLIED TO '()'
  }

}