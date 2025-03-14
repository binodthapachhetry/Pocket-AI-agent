import {StyleSheet} from 'react-native';

import {MessageType, Theme} from '../../utils/types';

const styles = ({
  currentUserIsAuthor,
  message,
  messageWidth,
  roundBorder,
  theme,
}: {
  currentUserIsAuthor: boolean;
  message: MessageType.DerivedAny;
  messageWidth: number;
  roundBorder: boolean;
  theme: Theme;
}) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-end',
      alignSelf: currentUserIsAuthor ? 'flex-end' : 'flex-start',
      justifyContent: !currentUserIsAuthor ? 'flex-end' : 'flex-start',
      flex: 1,
      flexDirection: 'row',
      marginBottom: message.type === 'dateHeader' ? 0 : 4 + message.offset,
      marginLeft: 20,
    },
    contentContainer: {
      backgroundColor:
        !currentUserIsAuthor || message.type === 'image'
          ? '#E1F5FE' // Light blue for AI messages
          : '#F5F5F5', // Light gray for user messages
      borderBottomLeftRadius:
        currentUserIsAuthor || roundBorder
          ? theme.borders.messageBorderRadius
          : 0,
      borderBottomRightRadius: currentUserIsAuthor
        ? roundBorder
          ? theme.borders.messageBorderRadius
          : 0
        : theme.borders.messageBorderRadius,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: theme.borders.messageBorderRadius,
      overflow: 'hidden',
      // Add elevation for Android to ensure the style takes precedence
      elevation: 1,
      // Ensure zIndex is set for iOS
      zIndex: 1,
    },
    dateHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
      marginTop: 16,
    },
    pressable: {
      maxWidth: messageWidth,
    },
  });

export default styles;
