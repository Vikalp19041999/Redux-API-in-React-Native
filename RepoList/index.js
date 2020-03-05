import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { listRepos } from '../reducer';

class RepoList extends Component {
    componentDidMount() {
        this.props.listRepos('Vikalp19041999');
    }
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );
    render() {
        const { repos } = this.props;
        return (
            <FlatList
                styles={styles.container}
                data={repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    text:{
        fontSize:18,
    }
});

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
        repos: storedRepositories
    };
};

const mapDispatchToProps = {
    listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);