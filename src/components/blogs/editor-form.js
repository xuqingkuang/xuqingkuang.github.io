import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Spin, Form, Input, Button } from 'antd';
import Codemirror from 'react-codemirror';
import config from '../../config'
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

class EditorForm extends Component {

  static propTypes = {
    err: PropTypes.object,
    blog: PropTypes.object
  }


  handleSubmit (evt) {
    evt.preventDefault();
    window.console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render () {
    const { err, blog, form } = this.props;
    const loading = !err && !blog;
    const { format, title, content } = blog;
    const { getFieldProps } = form;
    let message;
    if (err && err.message) {
      message = err.message;
      window.console.error(message);
    }
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 20 },
    };
    const editorOptions = {
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2,
      mode: format === 'html' ? 'htmlmixed' : format
    }
    return (
      <Spin tip={message} spinning={loading}>
        <Form horizontal onSubmit={(evt) => { this.handleSubmit(evt) }}>
          <Form.Item label="标题" { ...formItemLayout } >
            <Input placeholder="标题" { ...getFieldProps('title') } />
          </Form.Item>
          <Form.Item label="内容" { ...formItemLayout } >
            <Codemirror options={editorOptions} value={ content } />
          </Form.Item>
          <Form.Item { ...formItemLayout }>
            <Button type="primary" htmlType="submit">保存</Button>
          </Form.Item>
        </Form>
      </Spin>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    err: state.blogReducer.err,
    blog: state.blogReducer.blog.attributes
  };
}

const formOptions = {
  mapPropsToFields: (props) => {
    return { ...props.blog }
  }
}

// Conect the component with Redux
const component = Form.create(formOptions)(EditorForm);
export default connect(mapStateToProps)(component);
