'use client';

import { ActionIcon, Group, Tooltip, useMantineTheme } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandGmail,
} from '@tabler/icons-react';

/**
 * メールアドレスが不正に悪用されないように、メールアドレスを生成する関数です。
 *
 * @param {string} user - メールアドレスのユーザー部分（例： "john.doe"）
 * @param {string} domain - メールアドレスのドメイン部分（例： "example.com"）
 * @returns {string} 生成された （例： "john.doe@example.com"）
 *
 * @example
 * const mail = generateMail("john.doe", "example.com");
 */
const generateMail = (user: string, domain: string) => {
  return `mailto:${user}@${domain}`;
};

const mailUser = 'okazaki200226' as const;
const mailDomain = 'gmail.com' as const;

export const SNSLinks = () => {
  const { colors } = useMantineTheme();
  const clipboard = useClipboard();

  const copyMailToClipboard = () => {
    try {
      clipboard.copy(generateMail(mailUser, mailDomain));
      notifications.show({
        title: 'メールアドレスがクリップボードにコピーされました🥳',
        message: '',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'メールアドレスのコピーに失敗しました😢',
        message: '',
        color: 'red',
      });
    }
  };

  return (
    <Group gap={'sm'}>
      <Tooltip
        withArrow
        arrowSize={8}
        label="Visit my GitHub profile"
        position="top"
      >
        <ActionIcon
          component={'a'}
          target="_blank"
          href={'https://github.com/RuiOkazaki'}
          variant="filled"
          color={colors.dark[5]}
          radius={'xl'}
          size={32}
        >
          <IconBrandGithub />
        </ActionIcon>
      </Tooltip>
      <Tooltip
        withArrow
        arrowSize={8}
        label="Visit my X profile"
        position="top"
      >
        <ActionIcon
          component={'a'}
          target="_blank"
          href={'https://twitter.com/RuiOkazaki_'}
          variant="filled"
          color={colors.blue[5]}
          radius={'xl'}
          size={32}
        >
          <IconBrandX />
        </ActionIcon>
      </Tooltip>
      <Tooltip
        withArrow
        arrowSize={8}
        label="Copy Gmail address to clipboard"
        position="top"
      >
        <ActionIcon
          onClick={copyMailToClipboard}
          variant="filled"
          color={colors.orange[5]}
          radius={'xl'}
          size={32}
        >
          <IconBrandGmail />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};
