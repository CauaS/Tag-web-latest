import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

import logoKunden from '../../assets/img/kundenLogo.png';

export  default function PdfDocument({ data }) {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#ffffff",
      position: 'relative',
    },
    container :{
      margin: 20
    },
    header: {
      display: 'flex',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 35
    },
    requestNumber: {
      fontSize: 20
    },
    logo: {
      height: 45,
      width: 105,
      paddingRight: 10
    },
    containerRequestNumber: {
      paddingRight: 50
    },
    typeRequest: {
      borderRadius: 50,
      width: 25,
      height: 25,
      backgroundColor: data.color,    
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    contentText: {
      fontSize: 12,
      fontWeight:'normal',
    },
    footer: {    
      position: 'absolute',
      bottom: 20,
      width: '93%',
      left: 20
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textFooter: {
      fontSize: 12,
      fontWeight:'normal',
    },
    tagContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10    
    },
    tag: {
      borderRadius: 10,
      borderColor: '#004485',
      marginRight: 5,
      borderWidth: 1.5,
      marginBottom: 2
    },
    tagText: {
      fontSize: 12,
      fontWeight:'normal',
      padding: 3
    }
  });

  console.log(data.color);
  return (
    <Document>
      <Page  size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={logoKunden}
              style={styles.logo}
             />
             <View style={styles.containerRequestNumber}>
                <Text style={styles.requestNumber}>{data.number}</Text>
              </View>
             <View style={ styles.typeRequest }/>
          </View>
          <View sytle={styles.content}>
            <Text style={styles.contentText}>{data.description}</Text>
          </View>
          <View style={styles.tagContainer}>
            {
              data.tags.split(',').map((item, index) => (
                <View 
                  key={index} 
                  style={styles.tag}
                >
                  <Text style={styles.tagText}>{item.trim()}</Text>
                </View>
              ))
            }
          </View>
         </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.textFooter}>{data.consultant}</Text>
            <Text style={styles.textFooter}>{data.date}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
