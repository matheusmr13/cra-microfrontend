import React from 'react';
import { useLoggedApiRequest } from 'base/hooks/request';
import useApiAction from 'base/hooks/api-action';
import useLoggedUser from 'base/hooks/logged-user';
import Page from 'base/components/page';

import { Form, Input, Button, Space, Spin } from 'antd';

function Profiile() {
  const user = useLoggedUser();
  const [{ data: profile, loading }] = useLoggedApiRequest(`/users/${user.uid}/extra`);
  const [{ loading: savingProfile }, saveProfile] = useApiAction(`/users/${user.uid}/extra`, {
    method: 'put',
    message: {
      success: 'User saved',
    },
  });

  const onFinish = async (data: any) => {
    await saveProfile({
      data,
    });
  };

  return (
    <Page title="Profile" rootPage>
      {loading ? (
        <Spin size="large" />
      ) : (
          <Form name="basic" initialValues={profile} onFinish={onFinish}>
            <Form.Item label="Github Token" name="githubToken">
              <Input />
            </Form.Item>

            <Form.Item label="Slack Token" name="slackToken">
              <Input />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" loading={savingProfile}>
                  Save
                </Button>
              </Space>
            </Form.Item>
          </Form>
        )}
    </Page>
  );
}

export default Profiile;
