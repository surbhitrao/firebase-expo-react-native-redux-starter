/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, TouchableWithoutFeedback, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner, Item } from '../common';
import styles from './postStyle';

const propTypes = {
  getPostList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

class PostList extends Component {
  componentWillMount() {
    this.props.getPostList();
  }




   renderItem({ item, index }) {
    const { title } = item;

    return (
      <TouchableWithoutFeedback
        onPress={() => { Actions.postEdit({ item }); }}
      >
        <View>
          <Item style={styles.listContainerStyle}>
            <Text style={styles.listTitleStyle}>{title}</Text>
          </Item>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.loading
          ?
            <Spinner />
          :
          <FlatList
              data={this.props.list}
              renderItem={this.renderItem.bind(this)}

              keyExtractor={(item, index) => 'key' + index}

            /> }
      </View>
    );
  }
}

PostList.propTypes = propTypes;

export default PostList;
